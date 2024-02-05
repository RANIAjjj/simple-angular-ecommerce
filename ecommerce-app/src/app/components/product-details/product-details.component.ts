import { Component } from '@angular/core';
import { IProduct } from '../../dataTypes/products';
import { ActivatedRoute } from '@angular/router';
import { ProductListService } from '../../service/product-list.service'
import { CartListService } from '../../service/cart-list.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  p: IProduct
  constructor(private route: ActivatedRoute, private productService: ProductListService , private cartS : CartListService) {
    this.productService.Products[this.route.snapshot.params['id']]
    this.p = this.productService.Products[this.route.snapshot.params['id']]
  }

add(item:IProduct){
this.cartS.addToCart(item._id)
}

}
