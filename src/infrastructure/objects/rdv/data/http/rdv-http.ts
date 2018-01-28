import {Observable} from 'rxjs/Observable';

import {RdvBack} from '../../model/back/rdv-back.model';
import {IHttp} from '../../../../http/i-http';
import {IRdvData} from '../i-rdv-data';
import {ServerError} from '../../../error/service/server-error/server-error';
import {isRdvResponse, RdvResponse} from '../../model/response/rdv-response.model';
import {ConvertigoResponse} from '../../../shared/model/response/convertigo-response.model';
import {httpServerURL} from '../../../../../app/shared/global-variable';
import {objectToURLGet} from '../../../../../app/shared/global-function';

export class RdvHttp extends ServerError implements IRdvData{

    httpService: IHttp;

    constructor(private http: IHttp) {
        super();
        this.httpService = http;
    }

    getRdv(rdvObj: RdvBack): Observable<Array<RdvResponse>> {
        return this.httpService.httpCallGet(httpServerURL.serverRoot + httpServerURL.Rdv.path, objectToURLGet(rdvObj)  )
            .map(res => {
                    if (isRdvResponse(res.document[rdvObj.sequence])) {
                        return res;
                    } else {
                        return this.handleDataTypeError('Mauvais type');
                    }
                }
            );
    }
}
