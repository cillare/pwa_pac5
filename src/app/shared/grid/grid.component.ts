import { Component, Input, OnInit } from '@angular/core';

import { Card } from '../../models/card.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css',
})
export class GridComponent implements OnInit {
  @Input() dataSource: Card[] = [];
  displayedColumns: string[] = ['id', 'name', 'nationalPokedexNumber'];

  constructor() {}

  ngOnInit(): void {}
}
