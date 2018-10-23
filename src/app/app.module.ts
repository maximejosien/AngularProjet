import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as FromComponents from './components';
import * as FromServices from './services';

@NgModule({
  declarations: [
    AppComponent,
    ...FromComponents.Components,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FromServices.UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
