import {Observable} from 'rxjs/Observable';

import {LoginBack} from '../../model/back/login-back.model';
import {isLoginResponse, LoginResponse} from '../../model/response/login-response.model';

import {IHttp} from '../../../../http/i-http';

import {ServerError} from '../../../error/service/server-error/server-error';
import {httpServerURL} from '../../../../../app/shared/global-variable';
import {IAuth} from '../i-auth';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';

export class AuthFakeHttp extends ServerError implements IAuth{

    httpService: IHttp;
    fakeData: LoginResponse;

    constructor(private http: IHttp) {
        super();
        this.httpService = http;
        this.fakeData = new LoginResponse('falsetoken');
    }

    logUser(loginObj: LoginBack): Observable<LoginResponse> {
        return Observable.of(
            this.fakeData
        )
    }

    forgetPassword(loginObj: LoginBack): Observable<LoginResponse> {
        return this.httpService.httpCallPost(httpServerURL.Auth.serverRootAuth + httpServerURL.Auth.AuthPath, loginObj)
            .map(res => {
                    if (isLoginResponse(res)) {
                        return res
                    } else {
                        return this.handleDataTypeError('Mauvais type');
                    }
                }
            );
    }

}
