import { Component, Input, OnInit } from '@angular/core';
import { ImageUtilUrl } from '../../utils/comic-util.util';
import { IComics } from '../../../../core/interfaces/comics.interface';

@Component({
  selector: 'app-generic-card',
  templateUrl: './generic-card.component.html',
  styleUrl: './generic-card.component.scss'
})
export class GenericCardComponent implements OnInit{
  @Input() dataApi: IComics[] = [];
  @Input() type: 'series' | 'comics' = 'series';
  @Input() _isLoading: boolean = false;

  ngOnInit(): void {}

  getImageUrl(data: IComics): string | undefined {
    return ImageUtilUrl(data);
  }
}
