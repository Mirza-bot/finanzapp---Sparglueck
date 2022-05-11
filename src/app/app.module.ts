import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonMdComponent } from './button-md/button-md.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ButtonMdComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
