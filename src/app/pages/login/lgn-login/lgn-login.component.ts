import {Component, HostBinding} from '@angular/core';
import {Router} from '@angular/router';
import {fadeInAnimation} from '../../../shared/animations/animations';
import {InteractiveButtonState} from '../../../shared/enums';


@Component({
  selector: 'app-lgn-login',
  templateUrl: './lgn-login.component.html',
  styleUrls: ['./lgn-login.component.scss'],
  animations: [fadeInAnimation]
})
export class LgnLoginComponent {

  @HostBinding('@fadeInAnimation') fadeInAnimation;

  forgetPassDisabled = false;
  forgetPassStatus = InteractiveButtonState.initial;

  assistanceDisabled = false;
  assistanceStatus = InteractiveButtonState.initial;

  formProperties = {
    size : {width : '400px', height: 'auto'}
  };

  constructor(private router: Router) {}


  clickOnAssistance() {
    this.assistanceStatus = InteractiveButtonState.pending;
    this.assistanceDisabled = true;
    this.router.navigate(['assistance']);
  }

}
