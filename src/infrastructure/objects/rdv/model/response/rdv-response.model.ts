export interface RdvResponse {
    'IDEVENT': string,
    'TYPEEVENT': string,
    'DATEEVENT': string,
    'HEUREEVENT': string,
    'ORIGEVENT': string,
    'DESCEVENT': string,
    'COMMEVENT': string,
    'POSITEVENT': string,
    'NOTEEVENT': string,
    'IMMAT': string,
    'CONTRAT': string,
    'MARQUE': string,
    'MODELE': string,
    'GAMMEINT': string,
    'CIVILITE': string,
    'PRENOM': string,
    'NOM': string,
    'TELEPHONE': string,
    'EMAIL': string,
    'CLIENT': string,
    'RSCLIENT': string,
    'GUID': string,
    'LSTPOS': string
}

export function isRdvResponse(response: any): boolean {
    return response.IDEVENT !== undefined;
}
