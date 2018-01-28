
export class LoginResponse{
    token: string;

    constructor(token: string){
        this.token = token;
    }

}

export function isLoginResponse(response: any): boolean {
    return response.token !== undefined;
}