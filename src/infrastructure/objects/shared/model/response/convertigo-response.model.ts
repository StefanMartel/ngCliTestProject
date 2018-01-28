
export class ConvertigoResponse{
    document: object;

    constructor(document: object) {
        this.document = document;
    }

}

export function isConvertigoResponse(response: any): boolean {
    return response.document !== undefined;
}