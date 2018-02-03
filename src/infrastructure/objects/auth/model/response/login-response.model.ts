
export class LoginResponse {
    token: string;

    constructor(token: string) {
        if (typeof token === 'string'){
          this.token = token;
        }else{
          this.token = '';
        }
    }

}

export function isLoginResponse(response: any): boolean {
    return response.token !== undefined;
}
