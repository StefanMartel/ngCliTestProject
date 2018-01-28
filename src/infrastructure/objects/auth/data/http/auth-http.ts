import {Observable} from 'rxjs/Observable';

import {LoginBack} from '../../model/back/login-back.model';
import {isLoginResponse, LoginResponse} from '../../model/response/login-response.model';

import {IHttp} from '../../../../http/i-http';

import {ServerError} from '../../../error/service/server-error/server-error';
import {httpServerURL} from '../../../../../app/shared/global-variable';
import {objectToString} from '../../../../../app/shared/global-function';
import {IAuth} from '../i-auth';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';

export class AuthHttp extends ServerError implements IAuth {

    httpService: IHttp;

    constructor(private http: IHttp) {
        super();
        this.httpService = http;
    }

    logUser(loginObj: LoginBack): Observable<LoginResponse> {
        return this.httpService.httpCallGet(httpServerURL.Auth.serverRootAuth + httpServerURL.Auth.AuthPath, objectToString(loginObj, '/')  )
            .map(res => {
                    if (res !== '') {
                        return new LoginResponse(res);
                    } else {
                        this.handleDataTypeError('Mauvais type');
                    }
                }
            );
    }

    forgetPassword(loginObj: LoginBack): Observable<LoginResponse> {
        return this.httpService.httpCallPost(httpServerURL.Auth.serverRootAuth + httpServerURL.Auth.AuthPath, loginObj)
            .map(res => {
                    if (isLoginResponse(res)) {
                        return res
                    } else {
                        this.handleDataTypeError('Mauvais type');
                    }
                }
            );
    }

}
