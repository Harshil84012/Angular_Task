import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { Contact2Component } from "./contact2/contact2.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { ParentComponent } from "./parent/parent.component";
import { FanComponent } from "./products/fan/fan.component";
import { LaptopComponent } from "./products/laptop/laptop.component";
import { ProductsComponent } from "./products/products.component";
import { TvComponent } from "./products/tv/tv.component";
import { WashingmachineComponent } from "./products/washingmachine/washingmachine.component";

const appRouts: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'buyProducts', component: ParentComponent },
    { path: 'contact2', component: Contact2Component },
    {
        path: 'products', children: [
            { path: '', component: ProductsComponent, },
            { path: 'laptop', component: LaptopComponent },
            { path: 'tv', component: TvComponent },
            { path: 'washingmachine', component: WashingmachineComponent },
            { path: 'fan', component: FanComponent }
        ]
    },
    //  { path: '**', component: PageNotFoundComponent }

]

@NgModule({
    imports: [

        RouterModule.forRoot(appRouts)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }