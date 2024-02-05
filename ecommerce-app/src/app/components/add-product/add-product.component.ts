import { Component } from '@angular/core';
import { IProduct } from '../../dataTypes/products';
import{ProductListService} from '../../service/product-list.service'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent  {
  product={
    _id: '',
    name:'',
    price:0,
    imgURL:'',
    rate:0
  }
  addProd(){
    this._listPro.Products.push(this.product)
    // this.product={
    //   _id: '',
    //   name:'',
    //   price:0,
    //   imgURL:'',
    //   rate:0
    // }

    console.log(this._listPro.Products);
    
  }
  constructor(public _listPro : ProductListService) { }


}
