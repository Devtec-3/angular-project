import { Injectable, signal } from '@angular/core';
import { product } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<product[]>([
    {
      id: 3,
      title: 'Mens Cotton Jacket',
      price: 55.99,
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png',
      stock: 5,
    },
    {
      id: 4,
      title: 'Mens Casual Slim Fit',
      price: 15.99,
      image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png',
      stock: 7,
    },
  ]);

  addToCart(product: product) {
    this.cart.set([...this.cart(), product]);
  }


removeFromCart(id: number) {
    this.cart.set(this.cart().filter((p) => p.id !== id));
  }     

}
