import {async, inject, TestBed} from '@angular/core/testing';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {Http, ConnectionBackend, BaseRequestOptions, Response, ResponseOptions, RequestMethod} from '@angular/http';

import {HttpService} from './http';


export function Httpfactory(http: Http) {
    return new HttpService(http);
}


describe('HTTP Service', () => {

    let httpServ: HttpService;
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
                { provide: HttpService,
                    useFactory: Httpfactory,
                    deps : [Http]
                }
            ]
        });

    }));

    beforeEach(inject([HttpService, MockBackend], (HttpService, MockBackend) => {
        httpServ = HttpService;
        backend = MockBackend;
    }));


    it('should use the good configuration to connect', async(() => {
        backend.connections.subscribe((connection: MockConnection) => {
            expect(connection.request.url).toContain('http://localhost:3000');
            expect(connection.request.method).toEqual(RequestMethod.Post);
            expect(connection.request.headers.get('Content-Type')).toEqual('application/json');
            const options = new ResponseOptions({
                body: true
            });
            connection.mockRespond(new Response(options));
        });

        httpServ.httpCallPost('', '' ).subscribe( data => {
            expect(data).toEqual(true);
        });
    }));

});


