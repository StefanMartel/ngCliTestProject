import {Observable} from 'rxjs/Observable';

import {ErrorResponse} from '../../model/response/error-response.model';

export class ServerError {

    constructor() {}

    protected handleServerResponseError(error) {
        return Observable.throw(new ErrorResponse('404', 'URL pas la ou un truc du genrea developper'));
    }

    protected handleDataTypeError(error: string) {
        return Observable.throw(new ErrorResponse('20', 'Type de retour non conforma à attendu'));
    }

}
