import {Observable} from 'rxjs/Observable';
import {LoginBack} from '../model/back/login-back.model';
import {LoginResponse} from '../model/response/login-response.model';
import {ForgetPassBack} from '../model/back/forget-pass-back.model';
import {ForgetPassResponse} from '../model/response/forget-pass-response.model';


export interface IAuth {
  logUser(loginObj: LoginBack): Observable<LoginResponse>
  forgetPassword(ForgetPassObj: ForgetPassBack): Observable<ForgetPassResponse>
}
