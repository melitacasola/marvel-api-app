import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { ComicDetailFormComponent } from './components/comic-detail-form/comic-detail-form.component';
import { GenericCardComponent } from './components/generic-card/generic-card.component';
import { MarvelRoutingModule } from './marvel-routing.module';
import { ComicDetailsComponent } from './pages/comic-details/comic-details.component';
import { ComicsListComponent } from './pages/comics-list/comics-list.component';
import { SeriesListComponent } from './pages/series-list/series-list.component';

@NgModule({
  declarations: [
    SeriesListComponent,
    GenericCardComponent,
    ComicsListComponent,
    ComicDetailsComponent,
    ComicDetailFormComponent,
  ],
  imports: [
    CommonModule,
    MarvelRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    CoreModule,
  ],
})
export class MarvelModule {}
