import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sever-list',
  templateUrl: './sever-list.component.html',
  styleUrl: './sever-list.component.css',
})
export class SeverListComponent {
  @Input()
  serversList: string[] = [];
}
