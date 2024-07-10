import { Component, inject, SimpleChanges } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'core-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  serviceLocalStorage = inject(LocalStorageService);

  // ngOnChanges(changes: SimpleChanges) {
  //   this.btnLogout()
  // }

  btnLogout() {
    this.serviceLocalStorage.logout();
  }

}
