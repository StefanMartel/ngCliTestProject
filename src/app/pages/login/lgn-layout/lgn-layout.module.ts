import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { loginRoutes } from '../login.routes';
import { LgnLayoutComponent } from './lgn-layout.component';
import { SharedModule } from '../../../shared/components/shared.module';
import { LgnAssistanceComponent } from '../lgn-assistance/lgn-assistance.component';
import { LgnLoginComponent } from '../lgn-login/lgn-login.component';
import { LgnForgetPassComponent } from '../lgn-forget-pass/lgn-forget-pass.component';
import { LgnFormComponent } from '../lgn-form/lgn-form.component';

import {
  authGuardService, authHTTP, authService, httpRepo, localStorageService,
  typeProviderService
} from '../../../shared/moduling/providers';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(loginRoutes)
  ],
  declarations: [ LgnLayoutComponent, LgnAssistanceComponent, LgnLoginComponent,
    LgnForgetPassComponent, LgnFormComponent],
  exports: [],
  providers: [
    localStorageService(),
    httpRepo(),
    authHTTP(typeProviderService.real),
    authService(),
    authGuardService()
  ]
})

export class LoginLayoutModule { }
