import { Component, Input } from '@angular/core';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-table-area',
  templateUrl: './table-area.component.html',
  styleUrl: './table-area.component.css',
})
export class TableAreaComponent {
  @Input()
  personList: Person[] = [];
  tempPerson: Person = new Person();

  onResetnClick() {
    this.personList.sort((a, b) => {
      return a.id - b.id;
    });
  }
  onDescSortBtnClick() {
    this.personList.sort((a, b) => {
      return b.score - a.score;
    });
  }
  onSortBtnClick() {
    this.personList.sort((a, b) => {
      return a.score - b.score;
    });
  }
}
