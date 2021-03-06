import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatabindComponent } from './databind/databind.component';
import { ClassStyleComponent } from './class-style/class-style.component';
import { EventbindComponent } from './eventbind/eventbind.component';
import { TemplateVariableComponent } from './template-variable/template-variable.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    DatabindComponent,
    ClassStyleComponent,
    EventbindComponent,
    TemplateVariableComponent,
    PropertyBindingComponent,
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
