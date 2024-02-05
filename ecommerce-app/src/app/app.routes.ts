import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { Component } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AddProductComponent } from './components/add-product/add-product.component';

export const routes: Routes = [
    {path:'' , component:HomeComponent},
    {path : 'products' , component:ProductComponent},
    {path:'register' , component: RegisterComponent},
    {path:'login' , component: LoginComponent},
    {path:'details/:id' , component:ProductDetailsComponent},
    {path:'cart' , component:CartComponent},
    {path:'about' , component:AboutUsComponent},
    {path:'contact' , component:ContactUsComponent},
    {path:'add-product' , component:AddProductComponent},
];
