import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartListService {
  UserCart :any[]=[]

constructor() { }

addToCart(id:any){
  this.UserCart.push(id)
}
}
