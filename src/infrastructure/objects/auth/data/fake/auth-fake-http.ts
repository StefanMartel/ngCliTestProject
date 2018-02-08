import {Observable} from 'rxjs/Observable';

import {LoginBack} from '../../model/back/login-back.model';
import {LoginResponse} from '../../model/response/login-response.model';

import {IHttp} from '../../../../http/i-http';

import {ServerError} from '../../../error/service/server-error/server-error';
import {IAuth} from '../i-auth';

import {ForgetPassBack} from '../../model/back/forget-pass-back.model';
import {ForgetPassResponse} from '../../model/response/forget-pass-response.model';

export class AuthFakeHttp extends ServerError implements IAuth{

    httpService: IHttp;
    fakeLoginData: LoginResponse;
    fakeForgetPassData: ForgetPassResponse;


    constructor(private http: IHttp) {
        super();
        this.httpService = http;
        this.fakeLoginData = new LoginResponse('falsetoken');
        this.fakeForgetPassData = new ForgetPassResponse(true);
    }

    logUser(loginObj: LoginBack): Observable<LoginResponse> {
        return Observable.of(
            this.fakeLoginData
        )
    }

    forgetPassword(forgetPassObj: ForgetPassBack): Observable<ForgetPassResponse> {
      return Observable.of(
        this.fakeForgetPassData
      )
    }

}
