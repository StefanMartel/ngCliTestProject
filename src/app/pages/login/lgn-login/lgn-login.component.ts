import {Component, HostBinding, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {fadeInAnimation} from '../../../shared/animations/animations';
import {InteractiveButtonState} from '../../../shared/enums';
import {AuthService} from '../../../../domain/objects/auth/service/auth.service';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-lgn-login',
  templateUrl: './lgn-login.component.html',
  styleUrls: ['./lgn-login.component.scss'],
  animations: [fadeInAnimation]
})
export class LgnLoginComponent implements OnInit {

  @HostBinding('@fadeInAnimation') fadeInAnimation;

  loginForm: FormGroup;
  login: AbstractControl;
  password: AbstractControl;
  stayConnect: AbstractControl;
  stayConnectBis: AbstractControl;

  loginInProgress: InteractiveButtonState;
  errorButtonState = InteractiveButtonState.error;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authServ: AuthService) {
  }

  ngOnInit() {

    this.buildAuthenticationForm();
    this.loginInProgress = InteractiveButtonState.initial;
  }

  private buildAuthenticationForm() {
    this.loginForm = this.formBuilder.group({
      login: [ this.authServ.getLogin() , Validators.required],
      password: ['', Validators.required],
      stayConnect: [true],
      stayConnectBis: [true]
    });
    this.login = this.loginForm.controls['login'];
    this.password = this.loginForm.controls['password'];
    this.stayConnect = this.loginForm.controls['stayConnect'];
    this.stayConnectBis = this.loginForm.controls['stayConnectBis'];
  }

  valueChange(): void {
    if (this.loginInProgress !== InteractiveButtonState.initial) {
      this.loginInProgress = InteractiveButtonState.initial;
    }
  }

  onSubmit(): void {
    this.loginInProgress = InteractiveButtonState.pending;
    if (this.loginForm.valid) {
      this.authServ.validLogin(this.login.value, this.password.value, this.stayConnect.value).subscribe(
        data => {
          if (data) {
            this.loginInProgress = InteractiveButtonState.success;
            this.router.navigate(['home/']);
          }else {
            this.loginInProgress = InteractiveButtonState.wrong;
            this.password.setValue('');
            this.login.setValue('');
          }
        },
        error => {
          console.log(error);
          this.loginInProgress = InteractiveButtonState.error;
          this.password.setValue('');
          this.login.setValue('');
        }
      )
    }
  }

  clickOnForgetPass() {
    this.router.navigate(['forgetPass']).then( response => {
      console.log(response);
    });
  }

}
