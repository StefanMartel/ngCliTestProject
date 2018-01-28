import {Observable} from 'rxjs/Observable';

export interface IHttp {
    httpCallPost(pathToCall: string, objToSend: any): Observable<any>;
    httpCallGet(pathToCall: string, varToSend: string ): Observable<any>;
}