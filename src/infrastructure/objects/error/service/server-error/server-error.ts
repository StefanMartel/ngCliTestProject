import {Observable} from 'rxjs/Observable';

import {ErrorResponse} from '../../model/response/error-response.model';

export class ServerError {

    constructor() {}

    protected handleServerResponseError(error: string = 'Error URL est un truc du genre') {
        return Observable.throw(new ErrorResponse('404', error));
    }

    protected handleDataTypeError(error: string) {
        return Observable.throw(new ErrorResponse('20', error));
    }

}
