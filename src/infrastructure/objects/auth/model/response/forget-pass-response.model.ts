
export class ForgetPassResponse {
    mailSend: boolean;

  constructor(mailSend: boolean) {
    this.mailSend = mailSend;
  }
}

export function isForgetPassResponse(response: any): boolean {
    return response.mailSend !== undefined;
}
