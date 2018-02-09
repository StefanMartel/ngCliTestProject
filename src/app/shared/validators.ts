import {FormControl} from '@angular/forms';


const commonPattern = {
  'mail' :  {'pattern' : /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9_\.\-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,30})$/, 'errorMessage' : 'Format invalide'}
};

export class GlobalValidator {

  static mailFormat(control: FormControl){
    if (!commonPattern.mail.pattern.test(control.value)) {
      return {
        mailFormatError : {
          'errorMessage' : commonPattern.mail.errorMessage
        } };
    }
    return null;
  }
}

