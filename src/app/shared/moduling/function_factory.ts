import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {TranslateStaticLoader} from 'ng2-translate';

import {AuthFakeHttp} from '../../../infrastructure/objects/auth/data/fake/auth-fake-http';
import {IHttp} from '../../../infrastructure/http/i-http';
import {AuthHttp} from '../../../infrastructure/objects/auth/data/http/auth-http';
import {AuthService} from '../../../domain/objects/auth/service/auth.service';
import {IStorage} from '../../../infrastructure/storage/i-storage-service';
import {LocalStorageService} from '../../../infrastructure/storage/local-storage/local-storage-service';
import {HttpRepo} from '../../../infrastructure/http/http';
import {AuthGuardService} from '../../pages/login/login.routes';
import {IAuth} from '../../../infrastructure/objects/auth/data/i-auth';


export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

export function LocalStorageServicefactory() {
  return new LocalStorageService();
}

export function AuthServicefactory(AuthHttp: IAuth, storage: IStorage) {
  return new AuthService(AuthHttp, storage);
}


export function AuthHttpfactory(http: IHttp) {
  return new AuthHttp(http);
}

export function AuthFakeHttpfactory(http: IHttp) {
  return new AuthFakeHttp(http);
}

export function Httpfactory(http: Http) {
  return new HttpRepo(http);
}

export function AuthGuardServicefactory(Router: Router, AuthService: AuthService) {
  return new AuthGuardService(Router, AuthService);
}
