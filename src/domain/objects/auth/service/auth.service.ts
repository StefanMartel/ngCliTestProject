import {Observable} from 'rxjs/Observable';
import {isUndefined} from 'util';

import {LoginBack} from '../../../../infrastructure/objects/auth/model/back/login-back.model';
import {isLoginResponse, LoginResponse} from '../../../../infrastructure/objects/auth/model/response/login-response.model';
import {IStorage} from '../../../../infrastructure/storage/i-storage-service';

import {storageVariable} from '../../../../app/shared/global-variable';
import {IAuth} from '../../../../infrastructure/objects/auth/data/i-auth';

export class AuthService {

    logged: boolean;
    token: string

    constructor(public AuthRepository: IAuth, public storageRepository: IStorage) {
        this.logged = false;
        this.token = '';
    }

    validLogin(login: string, password: string, stayConnect: boolean): Observable<boolean> {
       return this.AuthRepository.logUser(new LoginBack(login, password))
            .map(res => {
                this.logged = false;
                this.storageRepository.setValues(storageVariable.logged, false);
                if (res.token !== '') {
                    this.token = res.token;
                    this.storageRepository.setValues(storageVariable.login, login);
                    this.storageRepository.setValues(storageVariable.logged, true);
                    this.storageRepository.setValues(storageVariable.token, this.token);
                    if (stayConnect) {
                        this.storageRepository.setValues(storageVariable.autoConnect, stayConnect);
                    }
                    this.logged = true;
                }
                return this.logged;
            })
    }

    forgetPassword(login: string): Observable<boolean> {
        return this.AuthRepository.forgetPassword(new LoginBack(login, login))
            .map( (data: LoginResponse) => {
                this.token = data.token;
                return true;
            });
    }

    getToken(): string{
        return this.getValue(storageVariable.token) || this.token;
    }

    getLogin(): string {
        return this.getValue(storageVariable.login);
    }

    isLogged(): boolean {
        return this.getValue(storageVariable.logged) || this.logged;
    };

    hasAutoConnect(): boolean {
        return this.getValue(storageVariable.autoConnect);
    }

    getValue(value: string) {
        return isUndefined(this.storageRepository.getValues(value)) ? '' : this.storageRepository.getValues(value);
    }

}
