import {Observable} from 'rxjs/Observable';

import {Rdv} from '../model/rdv.model';
import {RdvBack} from '../../../../infrastructure/objects/rdv/model/back/rdv-back.model';


import {IRdvData} from '../../../../infrastructure/objects/rdv/data/i-rdv-data';
import {AuthService} from '../../auth/service/auth.service';
import {eventType, httpServerURL} from '../../../../app/shared/global-variable';



export class RdvService {

    listOfRdv: Array<Rdv>;

    constructor(public RdvRepository: IRdvData, public AuthServ: AuthService) {

    }

    getListOfRDVInService(): Observable<boolean> {
        if (this.AuthServ.getToken() !== '') {
            return this.RdvRepository.getRdv(new RdvBack(httpServerURL.Rdv.sequence, this.AuthServ.getToken()))
                .map(res => {
                    this.listOfRdv = res;
                    return true;
                });
        }else {
            return Observable.of(false);
        }
    }

    getNumberOfRDV(typeofRDV: eventType): number {
        const tmp = this.listOfRdv.filter(rdv => rdv.TYPEEVENT === <any>typeofRDV);
        return tmp.length;
    }

}
