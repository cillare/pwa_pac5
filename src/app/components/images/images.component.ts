import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card.interface';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrl: './images.component.css',
})
export class ImagesComponent implements OnInit {
  cards: Card[] = [];
  grid: boolean = true;
  isLoading: boolean = true;

  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {
    this.imagesService.getAllImages().subscribe({
      next: (cards) => {
        this.cards = cards;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
      },
    });
  }

  gridView(): void {
    this.grid = true;
  }

  cardView(): void {
    this.grid = false;
  }
}
