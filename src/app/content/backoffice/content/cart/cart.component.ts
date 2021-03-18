import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {IState} from '../../../../store';
import {decrementProductInCart, incrementProductInCart, removeProductFromCart} from '../../../../store/actions/cart.action';
import {ICartProduct, selectProductInCartWitBonuses} from '../../../../store/reducers/cart.reducers';

export class Person {
  constructor(public name: string, public surname: string) {
  }

  public getStamp(): Date {
    return new Date();
  }
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // public products$ = this.store.select(selectProductInCart);
  public products$ = this.store.select(selectProductInCartWitBonuses);

  public person1 = new Person('Diana', 'Revi');
  public person2 = new Person('Vova', 'Peikr');

  constructor(private store: Store<IState>) {
    setTimeout(() => {
      console.log('Vladimir1');
      this.person1.name = 'Vladimir1';

      console.log('Vladimir2');
      this.person2.name = 'Vladimir2';
    }, 5000);

    setTimeout(() => {
      console.log('new Person');
      this.person2 = new Person('Giorgi', 'Peikrishvili');
    }, 8000);
  }

  ngOnInit(): void {
  }

  increment({_id}: ICartProduct): void {
    this.store.dispatch(incrementProductInCart({id: _id}));
  }

  decrement(product: ICartProduct): void {
    if (product.count === 1) {
      this.remove(product);
      return;
    }
    this.store.dispatch(decrementProductInCart({id: product._id}));
  }

  remove({_id}: ICartProduct): void {
    this.store.dispatch(removeProductFromCart({id: _id}));
  }

  trackByFn(_index: number, item: ICartProduct): string {
    return item._id;
  }

}
