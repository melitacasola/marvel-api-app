import { Component, inject } from '@angular/core';
import { LoadService } from './core/loading-overlay/load.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'marvel-api-app';
  loadService = inject(LoadService);
}
