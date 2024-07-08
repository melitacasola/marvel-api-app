import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarvelRoutingModule } from './marvel-routing.module';
import { SeriesListComponent } from './pages/series-list/series-list.component';
import { GenericCardComponent } from './components/generic-card/generic-card.component';
import { ComicsListComponent } from './pages/comics-list/comics-list.component';
import { ComicDetailsComponent } from './pages/comic-details/comic-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ComicDetailFormComponent } from './components/comic-detail-form/comic-detail-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SeriesListComponent,
    GenericCardComponent,
    ComicsListComponent,
    ComicDetailsComponent,
    ComicDetailFormComponent
  ],
  imports: [
    CommonModule,
    MarvelRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],

})
export class MarvelModule { }
