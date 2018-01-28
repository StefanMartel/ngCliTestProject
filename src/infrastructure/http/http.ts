import {Headers, Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {IHttp} from './i-http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {ServerError} from '../objects/error/service/server-error/server-error';



export class HttpRepo extends ServerError implements IHttp {

    private url: string;
    private headers: Headers;

    constructor(private http: Http) {
        super();
        this.headers = new Headers({'Content-Type': 'application/json'});
    }


    httpCallPost(pathToCall: string, objToSend: any): Observable<any> {
        return this.http.post(pathToCall, objToSend, {headers : this.headers} )
            .retry(3)
            .map( res => res.json())
            .catch(this.handleServerResponseError);
    }

    httpCallGet(pathToCall: string, varToSend: string ): Observable<any> {
        return this.http.get(pathToCall + varToSend, {headers : this.headers} )
            .retry(3)
            .map( res => res.json())
            .catch(this.handleServerResponseError);
    }

}
