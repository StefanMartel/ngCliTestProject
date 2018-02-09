import {Observable} from 'rxjs/Observable';

import {LoginBack} from '../../model/back/login-back.model';
import {isLoginResponse, LoginResponse} from '../../model/response/login-response.model';

import {IHttp} from '../../../../http/i-http';

import {ServerError} from '../../../error/service/server-error/server-error';
import {httpServerURL} from '../../../../../app/shared/global-variable';
import {IAuth} from '../i-auth';
import {isErrorResponse} from '../../../error/model/response/error-response.model';

import {ForgetPassBack} from '../../model/back/forget-pass-back.model';
import {ForgetPassResponse, isForgetPassResponse} from '../../model/response/forget-pass-response.model';

export class AuthHttp extends ServerError implements IAuth {

    httpService: IHttp;

    constructor(private http: IHttp) {
        super();
        this.httpService = http;
    }

    logUser(loginObj: LoginBack): Observable<LoginResponse> {
        return this.httpService.httpCallPost(httpServerURL.serverRoot + httpServerURL.ForgetPass.path, loginObj  )
            .map(res => {
                    if (res !== '') {
                        if (isLoginResponse(res)) {
                          return new LoginResponse(res);
                        }
                        if (isErrorResponse(res)) {
                          throw new Error (res.errorDescription);
                        }else {
                          throw new Error ('Connexion foireuse');
                        }
                    } else {
                        throw new Error ('Mauvais type');
                    }
                }
            ).catch(error => this.handleServerResponseError('error'));
    }

    forgetPassword(forgetPassObj: ForgetPassBack): Observable<ForgetPassResponse> {
        return this.httpService.httpCallPost(httpServerURL.serverRoot + httpServerURL.ForgetPass.path, forgetPassObj)
          .map(res => {
              if (res !== '') {
                if (isForgetPassResponse(res)) {
                  return new ForgetPassResponse(res);
                }
                if (isErrorResponse(res)) {
                  throw new Error (res.errorDescription);
                }else {
                  throw new Error ('Connexion foireuse');
                }
              } else {
                throw new Error ('Mauvais type');
              }
            }
          ).catch(error => this.handleServerResponseError('error'));
    }

}
