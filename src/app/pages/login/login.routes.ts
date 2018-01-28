import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, Routes} from '@angular/router';

import {LgnLayoutComponent} from './lgn-layout/lgn-layout.component';
import {LgnAssistanceComponent} from './lgn-assistance/lgn-assistance.component';
import {LgnForgetPassComponent} from './lgn-forget-pass/lgn-forget-pass.component';
import {LgnLoginComponent} from './lgn-login/lgn-login.component';
import {AuthService} from '../../../domain/objects/auth/service/auth.service';


export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private authServ: AuthService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLoggedIn = this.authServ.isLogged() && this.authServ.hasAutoConnect();
    if (!isLoggedIn) {
      this.router.navigate(['/home']);
      return false;
    } else {
      return true;
    }
  }

}


export const loginRoutes: Routes = [
    {
        path: '',
        component: LgnLayoutComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full'},
            { path: 'login', component: LgnLoginComponent },
            { path: 'forgetPass', component: LgnForgetPassComponent },
            { path: 'assistance', component: LgnAssistanceComponent }
        ]
    }
];

