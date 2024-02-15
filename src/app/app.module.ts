import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerRegistrationComponent } from './server-registration/server-registration.component';
import { FormsModule } from '@angular/forms';
import { SeverListComponent } from './sever-list/sever-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerRegistrationComponent,
    SeverListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
