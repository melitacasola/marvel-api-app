import { Component, OnInit, inject } from '@angular/core';
import { IComics } from '../../../../core/interfaces/comics.interface';
import { ActivatedRoute } from '@angular/router';
import { MarvelService } from '../../services/marvel-service.service';

@Component({
  selector: 'app-comic-details',
  templateUrl: './comic-details.component.html',
  styleUrl: './comic-details.component.scss'
})
export class ComicDetailsComponent implements OnInit{
  comic!: IComics;

  private routeActive = inject(ActivatedRoute);
  private marvelService = inject(MarvelService);

  ngOnInit() {
    this.routeActive.params.subscribe((params) => {
      this.marvelService.getComicId(params['id']).subscribe((data) => {
        this.comic = data[0];
        console.log(this.comic);
      });
    });
  }

  getImageUrl(): string | undefined {
    if (this.comic?.images.length) {
      const { path, extension } = this.comic.images[0];
      return `${path}.${extension}`;
    }
    return undefined;
  }
}
