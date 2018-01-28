/*
import {async, inject, TestBed} from '@angular/core/testing';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {Http, ConnectionBackend, BaseRequestOptions, Response, ResponseOptions} from '@angular/http';

import {AuthHttp} from './user/auth-http';
import {LoginBack} from '../models/back/login-back.model';


export function AuthHttpfactory(http: Http) {
    return new AuthHttp(http);
}

describe('Auth HTTP Service', () => {

    let userHttp: AuthHttp;
    let backend: MockBackend;

    beforeEach( (() => {
        TestBed.configureTestingModule({
            providers: [
                MockBackend, BaseRequestOptions,
                { provide: Http,
                    useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
                         return new Http(backend, defaultOptions);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                },
                { provide: AuthHttp,
                    useFactory: AuthHttpfactory,
                    deps : [Http]
                }
            ]
        });

    }));

    beforeEach(inject([AuthHttp, MockBackend], (PlayerHttp, MockBackend) => {
        userHttp = PlayerHttp;
        backend = MockBackend;
    }));


    it('should use the good URI to login', async(() => {
        backend.connections.subscribe((connection: MockConnection) => {
            expect(connection.request.url).toContain('/login');
            let options = new ResponseOptions({
                body: {'logged' : true}
            });
            connection.mockRespond(new Response(options));
        });

        let login: LoginBack = new LoginBack('admin', '1234');
        userHttp.logUser(login).subscribe( data => {
            expect(data).toEqual({'logged' : true});
        });
    }));

});
*/
