
export const httpServerURL = {
    serverRoot : 'http://localhost:3000',
    Auth : {
        path: '/login'
    },
    ForgetPass : {
        path: '/forgetPass'
    },
    Profile : {
        path: '/**********'
    },
    Rdv : {
        path: '/**********'
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
