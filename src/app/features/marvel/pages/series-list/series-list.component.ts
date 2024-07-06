import { Component, OnInit, inject } from '@angular/core';
import { MarvelService } from '../../services/marvel-service.service';
import { ISeries } from '../../../../core/interfaces/series.interface';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrl: './series-list.component.scss'
})
export class SeriesListComponent implements OnInit{
  series: ISeries[] = [];
  private marvelService = inject(MarvelService);

  ngOnInit(): void {
    this.marvelService.getSeries().subscribe((series) => {
      this.series = series;
      console.log('Series:', this.series);
    });
  }


}
