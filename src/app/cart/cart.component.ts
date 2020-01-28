import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = [];
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.fetchItems();
    this.setupForm();
  }

  fetchItems() {
    this.items = this.cartService.getItems() || [];
  }

  onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);
  }

  setupForm() {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

}