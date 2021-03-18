import {Action, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {IProduct} from '../../services/products.service';
import {addProductToCart, decrementProductInCart, incrementProductInCart, removeProductFromCart} from '../actions/cart.action';
import {IUser} from './user.reducers';

export interface ICartProduct extends IProduct {
  count: number;
}

export const cartAdapter: EntityAdapter<ICartProduct> = createEntityAdapter<ICartProduct>({
  selectId: (product: ICartProduct) => product._id,
});

const initialState = cartAdapter.getInitialState();

const cartReducer = createReducer(
  initialState,
  // @ts-ignore
  on(addProductToCart, (state, action) => {
    const entity = state.entities[action.product._id] as ICartProduct;
    return cartAdapter.upsertOne({
      ...action.product,
      count: entity ? ++entity.count : 1
    }, state);
  }),
  // @ts-ignore
  on(removeProductFromCart, (state, action) => {
    return cartAdapter.removeOne(action.id, state);
  }),
  // @ts-ignore
  on(incrementProductInCart, (state, {id}) => {
    const entity = state.entities[id] as ICartProduct;
    return cartAdapter.updateOne({id, changes: {count: ++entity.count}}, state);
  }),
  // @ts-ignore
  on(decrementProductInCart, (state, {id}) => {
    const entity = state.entities[id] as ICartProduct;
    return cartAdapter.updateOne({id, changes: {count: --entity.count}}, state);
  }),
);

// tslint:disable-next-line:typedef
export function cartReducers(state: EntityState<ICartProduct>, action: Action) {
  return cartReducer(state, action);
}

export const {selectAll} = cartAdapter.getSelectors();
export const selectCart = createFeatureSelector<EntityState<ICartProduct>>('cart');
export const selectUser = createFeatureSelector<IUser>('user');
export const selectProductInCart = createSelector(selectCart, selectAll);

export const totalProducts = createSelector(selectProductInCart, (products: ICartProduct[]) => {
  return products.reduce((totalCount, product) => {
    return (totalCount += product.count);
  }, 0);
});

export const selectProductInCartWitBonuses = createSelector(selectProductInCart, selectUser,
  (products: ICartProduct[], user: IUser) => {
    return products.map(product => {
      return {...product, price: product.price * product.count * user.bonuses};
    });
  });
