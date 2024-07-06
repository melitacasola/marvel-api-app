import { Component, inject } from '@angular/core';
import { IComics } from '../../../../core/interfaces/comics.interface';
import { MarvelService } from '../../services/marvel-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrl: './comics-list.component.scss'
})
export class ComicsListComponent {
  comics: IComics[] = [];
  private routeActive = inject(ActivatedRoute);

  private marvelService = inject(MarvelService);

  ngOnInit(): void {
    const id = +this.routeActive.snapshot.paramMap.get('id')!;
    this.marvelService.getComicsBySeriesId(id).subscribe((data) => {
      this.comics = data;
    });
  }

}
