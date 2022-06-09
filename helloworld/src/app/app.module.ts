import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyContainorComponent } from './mycontainor/mycontainor.component';
import { TopnavComponent } from './mycontainor/topnav/topnav.component';
import { HeaderComponent } from './mycontainor/header/header.component';
import { Textsec1Component } from './mycontainor/textsec1/textsec1.component';
import { Textsec2Component } from './mycontainor/textsec2/textsec2.component';

@NgModule({
  declarations: [
    AppComponent,
    MyContainorComponent,
    TopnavComponent,
    HeaderComponent,
    Textsec1Component,
    Textsec2Component 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
