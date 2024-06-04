import { NgModule } from '@angular/core';

import { CardComponent } from './card/card.component';
import { GridComponent } from './grid/grid.component';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [CardComponent, GridComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTableModule,
  ],
  exports: [CardComponent, GridComponent],
})
export class SharedModule {}
