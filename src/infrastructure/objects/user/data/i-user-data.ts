import {Observable} from 'rxjs/Observable';
import {ProfileBack} from '../model/back/profile-back.model';
import {ProfileResponse} from '../model/response/profile-response.model';

export interface IUserData {
    getProfile(userObj: ProfileBack): Observable<ProfileResponse>
}