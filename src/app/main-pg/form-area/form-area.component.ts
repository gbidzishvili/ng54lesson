import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-form-area',
  templateUrl: './form-area.component.html',
  styleUrl: './form-area.component.css',
})
export class FormAreaComponent {
  @Output()
  cardSubmitedEvent: EventEmitter<Card> = new EventEmitter();
  cardItem: Card = new Card();
  onSubmitBtnClick() {
    this.cardSubmitedEvent.emit(this.cardItem);
    this.cardItem = new Card();
  }
}
