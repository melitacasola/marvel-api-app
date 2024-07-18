import { Component, inject, OnChanges, SimpleChanges } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'core-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnChanges{

  ngOnChanges(changes: SimpleChanges): void {
    this.checkHash()
  }
  private serviceLocalStorage = inject(LocalStorageService);
  private router = inject(Router)
  public haveHash: boolean = true;

  public checkHash(): void {
    if(this.serviceLocalStorage.getHash()) this.haveHash = false
  }


  btnLogout() {
    this.serviceLocalStorage.logout();
    this.router.navigate([''])

  }

}
