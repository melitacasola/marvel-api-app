import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoBackDirective } from './directives/go-back.directive';
import { SharedButtonComponent } from './components/shared-button/shared-button.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';



@NgModule({
  declarations: [
    GoBackDirective,
    SharedButtonComponent,
    LazyImageComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GoBackDirective,
    SharedButtonComponent,
    LazyImageComponent,
  ]
})
export class SharedModule { }
