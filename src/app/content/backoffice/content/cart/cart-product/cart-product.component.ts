import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ICartProduct} from '../../../../../store/reducers/cart.reducers';


@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
// @ts-ignore
export class CartProductComponent {

  @Input()
  // @ts-ignore
  public product!: ICartProduct | any;

  @Output()
  // @ts-ignore
  public remove = new EventEmitter();
  @Output()
  // @ts-ignore
  public increment = new EventEmitter();
  @Output()
  // @ts-ignore
  public decrement = new EventEmitter();

  constructor() { }

}
