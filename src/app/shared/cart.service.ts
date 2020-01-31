import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: any = [];

  constructor(
    private http: HttpClient
  ) {}

  addToCart(product: any) {
    this.items.push(product);
  }

  getItems(): any[] {
    return this.items;
  }

  clearCart() {
    this.items.length = 0;
    return this.items;
  }

  getShippingPrices(): Observable<any> {
    return this.http.get('/assets/shipping.json');
  }

}