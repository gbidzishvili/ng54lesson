import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-card-area',
  templateUrl: './card-area.component.html',
  styleUrl: './card-area.component.css',
})
export class CardAreaComponent implements OnChanges {
  @Input()
  cardsList!: Card[];
  ngOnChanges(changes: SimpleChanges): void {
    console.log('cardsList is:', this.cardsList);
  }
  onRemoveCardBtnClick(i: number) {
    this.cardsList.splice(i, 1);
  }
}
