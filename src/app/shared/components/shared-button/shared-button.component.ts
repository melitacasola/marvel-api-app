import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-button',
  templateUrl: './shared-button.component.html',
  styleUrl: './shared-button.component.scss'
})
export class SharedButtonComponent {

  @Input() text: string = '';
  @Input() clickHandler?: () => void;

  onClick() {
    if (this.clickHandler) {
      this.clickHandler();
    }
  }
}
