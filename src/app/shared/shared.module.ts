import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoBackDirective } from './directives/go-back.directive';
import { SharedButtonComponent } from './components/shared-button/shared-button.component';



@NgModule({
  declarations: [
    GoBackDirective,
    SharedButtonComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GoBackDirective,
    SharedButtonComponent,
  ]
})
export class SharedModule { }
