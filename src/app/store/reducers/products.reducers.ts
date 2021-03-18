import {Action, createReducer, on} from '@ngrx/store';
import {getProductsError, getProductsPending, getProductsSuccess} from '../actions/products.action';
import {IProduct} from '../../services/products.service';

export interface IProductsState {
  items: IProduct[];
  loading: boolean;
  error: string;
}

const initialState: IProductsState = {
  items: [],
  loading: false,
  error: '',
};

const productsReducer = createReducer(
  initialState,
  // @ts-ignore
  on(getProductsPending, (state) => {
    return {
      ...state,
      loading: true
    };
  }),
  // @ts-ignore
  on(getProductsSuccess, (state, action) => {
    return {
      ...state,
      items: action.products,
      loading: false
    };
  }),
  // @ts-ignore
  on(getProductsError, (state) => {
    return {
      ...state,
      error: 'Error',
      loading: false
    };
  }),

);

// tslint:disable-next-line:typedef
export function productsReducers(state: IProductsState, action: Action): any {
  return productsReducer(state, action);
}

