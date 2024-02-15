import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Card } from './models/card.model';

@Component({
  selector: 'app-main-pg',
  templateUrl: './main-pg.component.html',
  styleUrl: './main-pg.component.css',
})
export class MainPgComponent {
  cards: Card[] = [];
  cardItem!: Card;
  onSubmitedCardSub(card: Card) {
    console.log('Card is:', this.cards);
    this.cards = [...this.cards, card];
  }
}
