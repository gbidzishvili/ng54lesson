import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-server-registration',
  templateUrl: './server-registration.component.html',
  styleUrl: './server-registration.component.css',
})
export class ServerRegistrationComponent {
  serverName = 'serverName';
  @Output()
  registerServerEmitter: EventEmitter<string> = new EventEmitter();
  onServerRegisterBtnClick() {
    this.registerServerEmitter.emit(this.serverName);
    this.serverName = '';
  }
}
