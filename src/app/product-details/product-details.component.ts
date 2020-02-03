import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.setProductFromData();
  }

  addToCart(product: any) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

  setProductFromData() {
    const setProduct = params => {
      const productId = params.get("productId");
      this.product = products[productId];
    };
    this.route.paramMap.subscribe(setProduct);
  }
}
