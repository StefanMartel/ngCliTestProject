import {Component, HostBinding, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../../domain/objects/auth/service/auth.service';
import {fadeInAnimation} from '../../../shared/animations/animations';

import {InteractiveButtonState} from '../../../shared/enums';
import {GlobalValidator} from '../../../shared/validators';

@Component({
  selector: 'app-lgn-forget-pass',
  templateUrl: './lgn-forget-pass.component.html',
  styleUrls: ['./lgn-forget-pass.component.scss'],
  animations: [fadeInAnimation]
})
export class LgnForgetPassComponent implements OnInit {

  @HostBinding('@fadeInAnimation') fadeInAnimation;

  forgetForm: FormGroup;
  email: AbstractControl;

  forgetInProgress: InteractiveButtonState;
  errorButtonState = InteractiveButtonState.error;

  constructor(private formBuilder: FormBuilder,
              private authServ: AuthService) {
  }

  ngOnInit() {
    this.buildForgetForm();
    this.forgetInProgress = InteractiveButtonState.initial;
  }

  private buildForgetForm() {
    // Dans les variables du formBuilder des elements
    // Le 2éme param est pour les validator synchrone (d'ou la mise entre crochet de l'ensemble)
    // Le 3éme pour les validator asynchrone
    this.forgetForm = this.formBuilder.group({
      email: [ '' , [Validators.required, GlobalValidator.mailFormat]],
    });
    this.email = this.forgetForm.controls['email'];
  }

  valueChange(): void {
    if (this.forgetInProgress !== InteractiveButtonState.initial) {
      this.forgetInProgress = InteractiveButtonState.initial;
    }
  }

  onSubmit(): void {
    this.forgetInProgress = InteractiveButtonState.pending;
    if (this.forgetForm.valid) {
      this.authServ.forgetPassword(this.email.value).subscribe(
        data => {
          if (data) {
            this.forgetInProgress = InteractiveButtonState.success;
          }else {
            this.forgetInProgress = InteractiveButtonState.wrong;
            this.email.setValue('');
          }
        },
        error => {
          console.log(error);
          this.forgetInProgress = InteractiveButtonState.error;
          this.email.setValue('');
        }
      )
    }
  }

}
