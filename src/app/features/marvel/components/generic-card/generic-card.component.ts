import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-card',
  templateUrl: './generic-card.component.html',
  styleUrl: './generic-card.component.scss'
})
export class GenericCardComponent implements OnInit{
  @Input() dataApi: any[] = [];
  @Input() type: "series" | "comics" = "series";


  ngOnInit(): void {}

}
