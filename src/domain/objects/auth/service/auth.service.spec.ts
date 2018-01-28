/*import {async, inject, TestBed} from '@angular/core/testing';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {Http, ConnectionBackend, BaseRequestOptions, Response, ResponseOptions} from '@angular/http';

import {UserHttp} from '../../../infrastructure/http/auth/auth-http';
import {AuthService} from './auth.service';
import {LoginResponse} from '../../../infrastructure/models/response/login-response.model';
import {IStorage} from '../../../infrastructure/storage/i-storage-service';
import {IUserHttp} from '../../../infrastructure/http/auth/i-auth-http';
import {LocalStorageService} from '../../../infrastructure/storage/local-storage/local-storage-service';



export function PlayerHttpfactory(http: Http) {
    return new UserHttp(http);
}

export function AuthServicefactory(UserHttp: IUserHttp, storage: IStorage) {
    return new AuthService(UserHttp, storage);
}

describe('Auth Service', () => {

    let authServ: AuthService;
    let backend: MockBackend;

    beforeEach( (() => {
        TestBed.configureTestingModule({
            providers: [
                MockBackend, BaseRequestOptions, LocalStorageService,
                { provide: Http,
                    useFactory: (backendPar: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
                         return new Http(backendPar, defaultOptions);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                },
                { provide: 'PlayerHttp',
                    useFactory: PlayerHttpfactory,
                    deps : [Http]
                },
                { provide: AuthService,
                    useFactory: AuthServicefactory,
                    deps : ['PlayerHttp', LocalStorageService]
                },
            ]
        });

    }));

    beforeEach(inject([AuthService, MockBackend], (AuthService, MockBackend) => {
        authServ = AuthService;
        backend = MockBackend;
    }));


    it('should use the good URI to connect', async(() => {
        backend.connections.subscribe((connection: MockConnection) => {
            expect(connection.request.url).toContain('/login');
            let options = new ResponseOptions({
                body : new LoginResponse(true)
            });
            connection.mockRespond(new Response(options));
        });

        let login = 'demo';
        let password = '1234';
        authServ.validLogin(login, password).subscribe( data => {
            expect(data).toEqual(true);
        });
    }));

});
*/
