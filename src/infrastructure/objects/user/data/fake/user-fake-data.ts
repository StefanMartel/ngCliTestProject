import {Observable} from 'rxjs/Observable';

import {ProfileBack} from '../../model/back/profile-back.model';
import {IHttp} from '../../../../http/i-http';
import {IUserData} from '../i-user-data';
import {ServerError} from '../../../error/service/server-error/server-error';
import {ProfileResponse} from '../../model/response/profile-response.model';


export class UserFakeHttp extends ServerError implements IUserData {

    httpService: IHttp;

    fakeData: ProfileResponse;

    constructor(private http: IHttp) {
        super();
        this.httpService = http;
        this.fakeData = {
          'CAT': '',
          'CODEFOURN': 'F5000167',
          'RAISONSOC': 'ESPACE SUFFREN',
          'LONGITUDE': '2.29586350',
          'LATITUDE': '48.85422540',
          'CODE': '',
          'ADRESSE1': '40 TER AVENUE DE SUFFREN',
          'ADRESSE2': '',
          'ADRESSE3': '',
          'CODEPOST': '75015',
          'VILLE': 'PARIS',
          'TELSTDR': '0153581000',
          'FAX': '',
          'DESCRIPTION': '',
          'ALDSELECT': '1',
          'NOTE': '',
          'MARQDISTRIB': 'VOLKSWAGEN',
          'ATELIERCAROSS': 'true',
          'EXPRESS': 'true',
          'VEHCOURTOIS': 'true',
          'SHOWROOMVN': 'true',
          'ESSAIVEH': 'true',
          'BOUTACC': 'true',
          'CONVOYAGE': 'false',
          'BORNEVE': 'false',
          'NOMSTD': '',
          'PRESTD': '',
          'STDTEL': '0153581000',
          'MAILSTD': '',
          'MAILSTDC': '',
          'TRANSPORT': '',
          'DETAILADR': '',
          'OUV1JDS': '',
          'OUV1JFS': '',
          'OUV1HOUVMAT': '',
          'OUV1HFERMAT': '',
          'OUV1HOUVSOIR': '',
          'OUV1HFERSOIR': '',
          'OUV2JDS': '',
          'OUV2JFS': '',
          'OUV2HOUVMAT': '',
          'OUV2HFERMAT': '',
          'OUV2HOUVSOIR': '',
          'OUV2HFERSOIR': '',
          'OUV3JDS': '',
          'OUV3JFS': '',
          'OUV3HOUVMAT': '',
          'OUV3HFERMAT': '',
          'OUV3HOUVSOIR': '',
          'OUV3HFERSOIR': '',
          'COMMENTAIRE': '',
          'JOURFERME': 'DIMANCHE',
          'CONGESANN': '',
          'POSTETRAV': 'false',
          'WIFI': 'false',
          'CODEWIFI': '',
          'BOISSONS': 'false',
          'JEUX': 'false',
          'SITEWEB': '',
          'LAVAGE': 'false',
          'TELATEL': '',
          'TELVN': '0153581000',
          'TELREST': '',
          'MAILATEL': 'mohand.benboudjema@aldautomotive.com',
          'MAILATELC': '',
          'MAILVN': 'I.THINEY@ESPACE-SUFFREN.COM',
          'MAILVNC': '',
          'MAILREST': '',
          'MAILRESTC': '',
          'NMCOMVN': 'BUISSON        THIERRY',
          'NMCOMATEL': '',
          'NMREST': '',
          'statusCode': '0',
          'statusMessage': 'Recupération OK'
        }
    }

    getProfile(userObj: ProfileBack): Observable<ProfileResponse> {
        return Observable.of(
            this.fakeData
        )
    }
}
