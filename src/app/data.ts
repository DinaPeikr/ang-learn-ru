import {EMPTY, Observable, of} from 'rxjs';
import {IProduct} from './services/products.service';
import {catchError, delay} from 'rxjs/operators';

export interface IProductResponse {
  products: IProduct[];
  serverError: boolean | null;
}
export const products: IProduct[] = [
  {
    _id: 'qwerty1',
    title: 'IPhone',
    img: `assets/img/product-1.jpg`,
    price: 221,
    author: 'Vlad',
    isFavorite: true,
  },
  {
    _id: 'qwerty2',
    title: 'Mac',
    img: 'assets/img/product-2.jpg',
    price: 267,
    author: 'Vlad',
    isFavorite: false,
  },
  {
    _id: 'qwerty3',
    title: 'Windows',
    img: 'assets/img/product-3.jpg',
    price: 124,
    author: 'Oleo',
    isFavorite: false,
  },
  {
    _id: 'qwerty4',
    title: 'Desktop',
    img: 'assets/img/product-4.jpg',
    price: 282,
    author: 'Dina',
    isFavorite: true,
  },
  {
    _id: 'qwerty5',
    title: 'Galaxy',
    img: 'assets/img/product-5.jpg',
    price: 232,
    author: 'Diana',
    isFavorite: true,
  }, {
    _id: 'qwerty6',
    title: 'Philips',
    img: 'assets/img/product-6.jpg',
    price: 300,
    author: 'Vladimir',
    isFavorite: true,
  },
  {
    _id: 'qwerty7',
    title: 'Bosch',
    img: 'assets/img/product-7.jpg',
    price: 188,
    author: 'Geo',
    isFavorite: false,
  }
];

export const products$: Observable<{ products: IProduct[] }> = of({products})
  .pipe(
    delay(3000),
    catchError(() => {
      return EMPTY;
    })
  );
