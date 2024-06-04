import { Component, Input, OnInit } from '@angular/core';

import { Card } from '../../models/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  @Input() card: Card = {
    id: '',
    name: '',
    nationalPokedexNumber: 0,
    imageUrl: '',
  };
  constructor() {}

  ngOnInit(): void {}
}
