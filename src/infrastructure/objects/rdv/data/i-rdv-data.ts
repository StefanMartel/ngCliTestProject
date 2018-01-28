import {Observable} from 'rxjs/Observable';
import {RdvBack} from '../model/back/rdv-back.model';
import {RdvResponse} from '../model/response/rdv-response.model';

export interface IRdvData {
    getRdv(userObj: RdvBack): Observable<Array<RdvResponse>>
}