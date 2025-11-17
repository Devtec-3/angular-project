import { Component, Inject, inject, input } from '@angular/core';
import { product } from '../../models/products.model';
import { Primarybutton } from '../../components/primarybutton/primarybutton';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-produc-card',
  imports: [Primarybutton],
  template: `
    <div class="bg-white shadow-md border rounded-xl p-6  flex flex-col relative">
      <div class="mx-auto ">
        <img [src]="product().image" class="w-[200px] h-[100px] object-contain" />
        <div class="flex flex-col mt-2">
          <span class="text-md font-bold">{{ product().title }}</span>
          <span class="text-sm">{{ '$' + product().price }}</span>
          <app-primarybutton
            label="Add to Cart"
            class="mt-3   "
            (btnClicked)="CartServices.addToCart(product())"
          />
        </div>

        <span
          class="absolute top-2 right-3 text-sm font-bold"
          [class]="product().stock ? 'text-green-500' : 'text-red-500'"
        >
          @if (product().stock) {
          {{ product().stock }} left }@else { out of stock }
        </span>
      </div>
    </div>
  `,
  styles: ``,
})
export class ProducCard {
  CartServices = inject(CartService);
  product = input.required<product>();
}
