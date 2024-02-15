import { Component } from '@angular/core';
import { Person } from './models/person.model';

@Component({
  selector: 'app-table-pg',
  templateUrl: './table-pg.component.html',
  styleUrl: './table-pg.component.css',
})
export class TablePgComponent {
  persons: Person[] = [];
  submittedPersonSubs(person: Person) {
    this.persons.push(person);
    console.log('persons are:', this.persons);
  }
}
