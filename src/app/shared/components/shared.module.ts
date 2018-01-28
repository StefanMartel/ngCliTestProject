import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from 'ng2-translate';

import { ShrInputComponent } from './shr-input/shr-input.component';
import { ShrImageComponent } from './shr-image/shr-image.component';
import { ShrButtonComponent } from './shr-button/shr-button.component';
import { ShrLabelComponent } from './shr-label/shr-label.component';
import { ShrLoadingComponent } from './shr-loading/shr-loading.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ShrInputComponent, ShrImageComponent, ShrButtonComponent, ShrLabelComponent, ShrLoadingComponent],
  exports: [ShrInputComponent, ShrImageComponent, ShrButtonComponent, ShrLabelComponent, ShrLoadingComponent, TranslateModule]
})
export class SharedModule { }
