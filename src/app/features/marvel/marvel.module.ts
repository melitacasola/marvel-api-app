import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarvelRoutingModule } from './marvel-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SeriesListComponent } from './pages/series-list/series-list.component';
import { GenericCardComponent } from './components/generic-card/generic-card.component';
import { ComicsListComponent } from './pages/comics-list/comics-list.component';
import { ComicDetailsComponent } from './pages/comic-details/comic-details.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    SeriesListComponent,
    GenericCardComponent,
    ComicsListComponent,
    ComicDetailsComponent
  ],
  imports: [
    CommonModule,
    MarvelRoutingModule,
    SharedModule
  ]
})
export class MarvelModule { }
