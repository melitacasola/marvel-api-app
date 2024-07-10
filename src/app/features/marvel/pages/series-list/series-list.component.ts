import { Component, OnInit, inject } from '@angular/core';
import { MarvelService } from '../../services/marvel-service.service';
import { ISeries } from '../../../../core/interfaces/series.interface';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrl: './series-list.component.scss'
})
export class SeriesListComponent implements OnInit {
  series: ISeries[] = [];
  private marvelService = inject(MarvelService);
  _isLoading: boolean = true;

  ngOnInit(): void {
    this.marvelService.getSeries().subscribe((series) => {
      this.series = series;
      this._isLoading = false;
      console.log('Series:', this.series);
    });
  }

  more(){
    this.marvelService.getSeries(this.series.length).subscribe((s) => {
      s.forEach((serie) => {
        this.series.push(serie);
      });
      this._isLoading = false;
      // console.log('Series:', this.series);
    });
  }
}
