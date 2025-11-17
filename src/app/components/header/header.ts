import { Component, inject, signal } from '@angular/core';
import { Primarybutton } from '../primarybutton/primarybutton';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [Primarybutton, RouterLink],
  template: `
    <div class="bg-slate-100 px-4 py-3 shadow-md flex  justify-between  items-center">
      <button class="text-xl" routerLink="/">My Store</button>
      <app-primarybutton [label]="'cart (' + CartServices.cart().length + ')'" routerLink="/cart" />
    </div>
  `,
  styles: `

  `,
})
export class Header {
  CartServices = inject(CartService);
}
