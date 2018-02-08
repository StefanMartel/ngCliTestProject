import {Observable} from 'rxjs/Observable';


import {ProfileBack} from '../../model/back/profile-back.model';

import {IHttp} from '../../../../http/i-http';
import {IUserData} from '../i-user-data';
import {ServerError} from '../../../error/service/server-error/server-error';
import {isProfileResponse, ProfileResponse} from '../../model/response/profile-response.model';
import {httpServerURL} from '../../../../../app/shared/global-variable';
import {objectToURLGet} from '../../../../../app/shared/global-function';

export class UserHttp extends ServerError implements IUserData{

    httpService: IHttp;

    constructor(private http: IHttp) {
        super();
        this.httpService = http;
    }

    getProfile(userObj: ProfileBack): Observable<ProfileResponse> {
        return this.httpService.httpCallGet(httpServerURL.serverRoot + httpServerURL.Profile.path, objectToURLGet(userObj)  )
            .map(res => {
                    const tmpData: ProfileResponse =  res;
                    if (isProfileResponse(tmpData)) {
                        return res;
                    } else {
                        return this.handleDataTypeError('Mauvais type');
                    }
                }
            );
    }
}
