import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Http} from '@angular/http';
import {RouterModule} from '@angular/router';
import {TranslateLoader, TranslateModule} from 'ng2-translate';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import {createTranslateLoader} from './shared/moduling/function_factory';
import {appRoutes} from './app.route';
import {LoginLayoutModule} from './pages/login/lgn-layout/lgn-layout.module';
import {SharedModule} from './shared/components/shared.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LoginLayoutModule,
    SharedModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    RouterModule.forRoot(appRoutes,
      { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
