

import {IStorage} from '../i-storage-service';

export class LocalStorageService implements IStorage {

    constructor() {}

    public setValues(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    public getValues(key): any {
        return JSON.parse(localStorage.getItem(key));
    }

}