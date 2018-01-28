import {Observable} from 'rxjs/Observable';

import {User} from '../model/user.model';

import {ProfileBack} from '../../../../infrastructure/objects/user/model/back/profile-back.model';


import {IUserData} from '../../../../infrastructure/objects/user/data/i-user-data';
import {AuthService} from '../../auth/service/auth.service';
import {httpServerURL} from '../../../../app/shared/global-variable';


export class UserService {

   logged: boolean;
   token: string;

   constructor(public UserRepository: IUserData, public AuthServ: AuthService) {
      this.logged = false;
      this.token = '';
   }

   getProfile(): Observable<User> {
        let tmpProfile: User;
        if (this.AuthServ.getToken() !== '') {
            return this.UserRepository.getProfile(new ProfileBack(httpServerURL.Profile.sequence, this.AuthServ.getToken()))
                .map(res => {
                   tmpProfile = res;
                   return tmpProfile;
                });
        }else {
           return Observable.of(tmpProfile);
        }
   }

}
