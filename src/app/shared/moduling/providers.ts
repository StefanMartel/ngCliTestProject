import {Http} from '@angular/http';
import {Router} from '@angular/router';

import {AuthGuardService} from '../../pages/login/login.routes';
import {HttpRepo} from '../../../infrastructure/http/http';
import {LocalStorageService} from '../../../infrastructure/storage/local-storage/local-storage-service';
import {AuthService} from '../../../domain/objects/auth/service/auth.service';

import {
  AuthFakeHttpfactory, AuthGuardServicefactory, AuthHttpfactory, AuthServicefactory,
  Httpfactory, LocalStorageServicefactory
} from './function_factory';


export enum typeProviderService {
  real,
  fake
}

export function localStorageService () {
  return {
    provide: LocalStorageService,
    useFactory: LocalStorageServicefactory
  };
}

export function authService () {
  return {
    provide: AuthService,
    useFactory: AuthServicefactory,
    deps: ['AuthHttp', LocalStorageService]
  }
}

export function authHTTP (typeProvider: typeProviderService) {
  return {
    provide: 'AuthHttp',
    useFactory: typeProvider === typeProviderService.real ? AuthHttpfactory : AuthFakeHttpfactory,
    deps: [HttpRepo]
  }
}

export function httpRepo () {
  return {
    provide: HttpRepo,
    useFactory: Httpfactory,
    deps: [Http]
  }
}

export function authGuardService () {
  return {
    provide: AuthGuardService,
    useFactory: AuthGuardServicefactory,
    deps: [Router, AuthService]
  }
}
