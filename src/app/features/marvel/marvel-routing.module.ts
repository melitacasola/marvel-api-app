import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesListComponent } from './pages/series-list/series-list.component';
import { ComicsListComponent } from './pages/comics-list/comics-list.component';
import { ComicDetailsComponent } from './pages/comic-details/comic-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SeriesListComponent
      },
      {
        path: ':id/comics-list',
        children: [
          {
            path: '',
            component: ComicsListComponent,
          },
          {
            path: ':id',
            component: ComicDetailsComponent
          }
        ]
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarvelRoutingModule { }
