import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {of} from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {ProductsService} from '../../services/products.service';
import {getProductsError, getProductsPending, getProductsSuccess} from '../actions/products.action';


@Injectable()
export class ProductsEffects {

  getProducts$ = createEffect(() => this.actions$.pipe(
    ofType(getProductsPending),
    mergeMap(() => this.productsService.getProductsJson()
      .pipe(
        map(products => (getProductsSuccess({products}))),
        catchError(() => of(getProductsError))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}
}
