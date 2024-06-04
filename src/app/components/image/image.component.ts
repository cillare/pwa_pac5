import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../../models/card.interface';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrl: './image.component.css',
})
export class ImageComponent implements OnInit {
  card: Card | null = null;
  showTab: boolean = false;

  constructor(
    private imagesService: ImagesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');

    if (identifier === null) {
      this.router.navigateByUrl('/');
    } else {
      this.imagesService
        .getImageById(identifier)
        .subscribe((card: Card | null) => {
          if (!card) {
            this.router.navigateByUrl('/');
          }

          this.card = card;
        });
    }
  }

  showDetails(): void {
    this.showTab = true;
  }
}
