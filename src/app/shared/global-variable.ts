
export const httpServerURL = {
    Auth : {
        serverRootAuth: 'http://localhost:3000',
        AuthPath: '/login'
    },
    serverRoot : 'https://***********',
    Profile : {
        path: '/**********',
        sequence: '*********'
    },
    Rdv : {
        path: '/**********',
        sequence: '********'
    }
};

export const storageVariable = {
    login : 'login',
    token: 'token',
    autoConnect: 'autoConnect',
    logged: 'logged'
};

export enum eventType {
    revision = <any> '12',
    delivery = <any> '11',
    unknown = <any> '',
}
