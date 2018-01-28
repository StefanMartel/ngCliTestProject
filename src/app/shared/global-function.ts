
export function cloneJSON (original: any): any {
    return JSON.parse(JSON.stringify(original));
}

export function objectToString(obj: object, separator: string): string {
    let strReturn = '';

    for (const key of Object.keys(obj)) {
        strReturn += obj[key] + separator;
    }
    return strReturn;
}

export function objectToURLGet(obj: object): string {
    let strReturn = '?';

    for (const key of Object.keys(obj)) {
        strReturn += key + '=' + obj[key] + '&' ;
    }
    return strReturn;
}


