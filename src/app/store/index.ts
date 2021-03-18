import {IProductsState, productsReducers} from './reducers/products.reducers';
import {cartReducers, ICartProduct} from './reducers/cart.reducers';
import { EntityState } from '@ngrx/entity';
import {IUser, userReducers} from './reducers/user.reducers';

export interface IState {
  products: IProductsState;
  cart: EntityState<ICartProduct>;
  user: IUser;
}

export const reducers = {
  products: productsReducers,
  cart: cartReducers,
  user: userReducers,
};
