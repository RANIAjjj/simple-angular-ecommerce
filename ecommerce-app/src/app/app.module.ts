import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import{NavComponent}from './components/nav/nav.component'
import {ProductComponent}from './components/product/product.component'
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { RateComponent } from './components/rate/rate.component';
import{routes} from './app.routes'
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AddProductComponent } from './components/add-product/add-product.component';


@NgModule({
    declarations:[
        AppComponent,
        HomeComponent,
        NavComponent,
        ProductComponent,
        FooterComponent,
        RateComponent,
        ProductDetailsComponent,
        AboutUsComponent,
        ContactUsComponent,
        AddProductComponent
    ],
    imports:[
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes),
    ],
    bootstrap:[AppComponent],
})

export class AppModule{

}