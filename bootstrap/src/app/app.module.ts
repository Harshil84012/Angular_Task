import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToggleComponent } from './toggle/toggle.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerComponent } from './datepicker/datepicker.component';

import { FormsModule } from '@angular/forms';
import { DropdownComponent } from './dropdown/dropdown.component';



@NgModule({
  declarations: [
    AppComponent,
    ToggleComponent,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
