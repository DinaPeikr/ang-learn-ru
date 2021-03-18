import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {IProduct, ProductsService} from '../../../../services/products.service';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {Store} from '@ngrx/store';
import {IState} from '../../../../store';
import {getProductsPending} from '../../../../store/actions/products.action';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // public products$: Observable<IProduct[]> = this.productsServer.getProductsJson();

  public products$: Observable<IProduct[]> = this.store.select('products', 'items');
  public loading$: Observable<boolean> = this.store.select('products', 'loading');
  public searchText = '';
  public hasFavorites = false;

  constructor(private productsServer: ProductsService,
              private store: Store<IState>) {
    console.log(this.productsServer.timestamp);
  }

  ngOnInit(): void {
    this.store.dispatch(getProductsPending());
  }
  public searchProductByTitle(text: string): void {
    console.log(text);
    this.searchText = text;
  }

  public productsFilter(products: IProduct[]): IProduct[] {
    return products.filter((product: IProduct) => {
      return `${product.title} ${product.price}`.toLocaleLowerCase().includes(this.searchText.toLowerCase());
    });
  }

  toggleFavoriteProducts(event: MatCheckboxChange): void {
    this.hasFavorites = event.checked;
    // console.log(this.hasFavorites);
  }
}
