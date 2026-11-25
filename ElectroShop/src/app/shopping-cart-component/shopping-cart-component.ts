import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-component',
  standalone: false,
  styleUrl: './shopping-cart-component.css',
  templateUrl: './shopping-cart-component.html',
})
export class ShoppingCartComponent {

  @Input() name="";
  @Input() quaitiy=0;
}
