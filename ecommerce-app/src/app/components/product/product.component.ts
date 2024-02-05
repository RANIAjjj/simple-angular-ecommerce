import { Component } from '@angular/core';
import { IProduct } from '../../dataTypes/products';
import { ProductListService } from '../../service/product-list.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  p:IProduct[]
  constructor(private _prdServ : ProductListService){
    this.p = _prdServ.Products
  }


// recieveData(data:string){
//   console.log(data);
  
// }
}
