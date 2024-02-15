import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ngLesson54';
  servers: string[] = [];
  registerServerSubs(event: string) {
    this.servers.push(event);
    console.log(this.servers);
  }
}
