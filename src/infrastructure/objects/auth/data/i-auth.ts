import {Observable} from 'rxjs/Observable';
import {LoginBack} from '../model/back/login-back.model';
import {LoginResponse} from '../model/response/login-response.model';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';


export interface IAuth {
  logUser(loginObj: LoginBack): Observable<LoginResponse>
  forgetPassword(loginObj: LoginBack): Observable<LoginResponse>
}
