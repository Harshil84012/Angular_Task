import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';

import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LaptopComponent } from './products/laptop/laptop.component';
import { TvComponent } from './products/tv/tv.component';
import { WashingmachineComponent } from './products/washingmachine/washingmachine.component';
import { FanComponent } from './products/fan/fan.component';
import { AdddeleteComponent } from './adddelete/adddelete.component';
import { CardComponent } from './card/card.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { DesignutilityService } from './appServices/designutility.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { TestdirectiveDirective } from './appDirective/testdirective.directive';
import { DropdownDirective } from './appDirective/dropdown.directive';
import { uxPipe } from './appPipes/ux.pipe';
import { FilterPipe } from './appPipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Contact2Component } from './contact2/contact2.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    LoginComponent,
    PageNotFoundComponent,
    WashingmachineComponent,
    LaptopComponent,
    FanComponent,
    TvComponent,
    AdddeleteComponent,
    CardComponent,
    ParentComponent,
    ChildComponent,
    Comp1Component,
    Comp2Component,
    TestdirectiveDirective,
    DropdownDirective,
    uxPipe,
    FilterPipe,
    Contact2Component,





  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    AppRoutingModule

  ],
  providers: [DesignutilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
