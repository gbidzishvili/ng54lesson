import { Component, EventEmitter, Output } from '@angular/core';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-form-area',
  templateUrl: './form-area.component.html',
  styleUrl: './form-area.component.css',
})
export class FormAreaComponent {
  @Output()
  personSubmitEvent: EventEmitter<Person> = new EventEmitter();
  tempPerson: Person = new Person();
  id = 1;
  onPersonInfoSubmitBtnClick() {
    this.tempPerson.id = this.id;
    this.id += 1;
    this.personSubmitEvent.emit(this.tempPerson);
    this.tempPerson = new Person();
  }
}
