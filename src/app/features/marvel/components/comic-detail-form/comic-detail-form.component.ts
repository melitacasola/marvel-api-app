import { Component, Input, SimpleChanges, inject } from '@angular/core';
import { IComics } from '../../../../core/interfaces/comics.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ComicUtilCreators, ComicUtilDate, ComicUtilPrice, ImageUtilUrl } from '../../utils/comic-util.util';

@Component({
  selector: 'app-comic-detail-form',
  templateUrl: './comic-detail-form.component.html',
  styleUrl: './comic-detail-form.component.scss'
})
export class ComicDetailFormComponent {
  @Input() comic!: IComics;

  private fb = inject(FormBuilder);
  public comicForm!: FormGroup;

  public imageUrl: string | undefined;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['comic'] && this.comic) {
      this.initForm();
    }

  }

  private initForm() {
    this.comicForm = this.fb.group({
      title: [this.comic.title],
      description: [this.comic.description],
      pageCount: [this.comic.pageCount],
      price: this.getComicPrice(),
      creators: this.getComicCreators(),
      dates: this.getComicDate(),
    });

    this.imageUrl = this.getImageUrl();
    console.log(this.imageUrl, 'this.imageUrl');

  }

  getImageUrl(): string | undefined {
    return ImageUtilUrl(this.comic);
  }

  getComicPrice(): number | undefined {
    return ComicUtilPrice(this.comic);
  }
  getComicDate(): string | undefined {
    return ComicUtilDate(this.comic);
  }
  getComicCreators(): string | undefined {
    return ComicUtilCreators(this.comic);
  }
}
