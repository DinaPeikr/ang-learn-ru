import {createAction, props} from '@ngrx/store';
import {IProduct} from '../../services/products.service';

export const addProductToCart = createAction(
  '[Cart] Add product to cart',
  props<{ product: IProduct | any}>()
);

export const removeProductFromCart = createAction(
  '[Cart] Remove product from cart',
  props<{ id: string }>()
);

export const incrementProductInCart = createAction(
  '[Cart] Increment product in cart',
  props<{ id: string }>()
);

export const decrementProductInCart = createAction(
  '[Cart] Decrement product in cart',
  props<{ id: string }>()
);
