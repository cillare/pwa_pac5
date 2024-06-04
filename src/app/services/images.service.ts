import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Card } from '../models/card.interface';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor(private http: HttpClient) {}

  getAllImages(): Observable<Card[]> {
    return this.http.get<any>('https://api.pokemontcg.io/v1/cards').pipe(
      map((response: any) => {
        return response.cards.map((card: any) => {
          return {
            id: card.id,
            name: card.name,
            nationalPokedexNumber: card.nationalPokedexNumber,
            imageUrl: card.imageUrl,
          };
        });
      })
    );
  }

  getImageById(id: string): Observable<Card | null> {
    return this.http.get<any>(`https://api.pokemontcg.io/v1/cards/${id}`).pipe(
      map((response: any) => {
        if (response.card) {
          const card = response.card;
          return {
            id: card.id,
            name: card.name,
            nationalPokedexNumber: card.nationalPokedexNumber,
            imageUrl: card.imageUrl,
          };
        } else {
          return null;
        }
      })
    );
  }
}
