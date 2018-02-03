import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from 'ng2-translate';

import { ShrInputComponent } from './shr-input/shr-input.component';
import { ShrImageComponent } from './shr-image/shr-image.component';
import { ShrButtonComponent } from './shr-button/shr-button.component';
import { ShrLabelComponent } from './shr-label/shr-label.component';
import { ShrLoadingComponent } from './shr-loading/shr-loading.component';
import { ShrTitleComponent } from './shr-title/shr-title.component';
import { ShrLinkComponent } from './shr-link/shr-link.component';
import { ShrFooterComponent } from './shr-footer/shr-footer.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [ShrInputComponent, ShrImageComponent, ShrButtonComponent, ShrLabelComponent, ShrLoadingComponent, ShrTitleComponent, ShrLinkComponent, ShrFooterComponent],
  exports: [ShrInputComponent, ShrImageComponent, ShrButtonComponent, ShrLabelComponent, ShrLoadingComponent, ShrTitleComponent, ShrLinkComponent,  ShrFooterComponent, TranslateModule]
})
export class SharedModule { }
