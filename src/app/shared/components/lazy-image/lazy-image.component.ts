import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.scss'
})
export class LazyImageComponent implements OnInit{
  @Input() public src: string | undefined;
  @Input() public alt: string = "";

  public _loaded: boolean = false;

  ngOnInit(): void {
    if (!this.src) {
      throw new Error('URL property is required');
    }
  }

  onLoad() {
    setTimeout(() => {
      this._loaded = true;
    }, 1000);
  }
}
