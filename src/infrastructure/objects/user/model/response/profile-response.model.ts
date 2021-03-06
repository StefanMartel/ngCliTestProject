
export interface ProfileResponse {
    'CAT': string,
    'CODEFOURN': string,
    'RAISONSOC': string,
    'LONGITUDE': string,
    'LATITUDE': string,
    'CODE': string,
    'ADRESSE1': string,
    'ADRESSE2': string,
    'ADRESSE3': string,
    'CODEPOST': string,
    'VILLE': string,
    'TELSTDR': string,
    'FAX': string,
    'DESCRIPTION': string,
    'ALDSELECT': string,
    'NOTE': string,
    'MARQDISTRIB': string,
    'ATELIERCAROSS': string,
    'EXPRESS': string,
    'VEHCOURTOIS': string,
    'SHOWROOMVN': string,
    'ESSAIVEH': string,
    'BOUTACC': string,
    'CONVOYAGE': string,
    'BORNEVE': string,
    'NOMSTD': string,
    'PRESTD': string,
    'STDTEL': string,
    'MAILSTD': string,
    'MAILSTDC': string,
    'TRANSPORT': string,
    'DETAILADR': string,
    'OUV1JDS': string,
    'OUV1JFS': string,
    'OUV1HOUVMAT': string,
    'OUV1HFERMAT': string,
    'OUV1HOUVSOIR': string,
    'OUV1HFERSOIR': string,
    'OUV2JDS': string,
    'OUV2JFS': string,
    'OUV2HOUVMAT': string,
    'OUV2HFERMAT': string,
    'OUV2HOUVSOIR': string,
    'OUV2HFERSOIR': string,
    'OUV3JDS': string,
    'OUV3JFS': string,
    'OUV3HOUVMAT': string,
    'OUV3HFERMAT': string,
    'OUV3HOUVSOIR': string,
    'OUV3HFERSOIR': string,
    'COMMENTAIRE': string,
    'JOURFERME': string,
    'CONGESANN': string,
    'POSTETRAV': string,
    'WIFI': string,
    'CODEWIFI': string,
    'BOISSONS': string,
    'JEUX': string,
    'SITEWEB': string,
    'LAVAGE': string,
    'TELATEL': string,
    'TELVN': string,
    'TELREST': string,
    'MAILATEL': string,
    'MAILATELC': string,
    'MAILVN': string,
    'MAILVNC': string,
    'MAILREST': string,
    'MAILRESTC': string,
    'NMCOMVN': string,
    'NMCOMATEL': string,
    'NMREST': string,
    'statusCode': string,
    'statusMessage': string
}

export function isProfileResponse(response: any): boolean {
    return response.CAT !== undefined;
}
