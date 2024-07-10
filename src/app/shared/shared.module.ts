import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateFormatterPipe } from './pipes/date-formatter.pipe';
import { GoBackDirective } from './directives/go-back.directive';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';
import { SharedButtonComponent } from './components/shared-button/shared-button.component';



@NgModule({
  declarations: [
    GoBackDirective,
    SharedButtonComponent,
    LazyImageComponent,
    DateFormatterPipe,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DateFormatterPipe,
    GoBackDirective,
    LazyImageComponent,
    SharedButtonComponent,
  ]
})
export class SharedModule { }
