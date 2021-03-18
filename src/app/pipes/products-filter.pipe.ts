import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from '../services/products.service';

@Pipe({
  name: 'productsFilter',
  pure: false
})
export class ProductsFilterPipe implements PipeTransform {

  transform(products: IProduct[], searchTerm: string, hasFavorites: boolean): IProduct[] {
    if (hasFavorites) {
      return products.filter((product: IProduct) => product.isFavorite);
    }

    if (!searchTerm) {
      return products;
    }
    return products.filter((product: IProduct) => {
      return `${product.title} ${product.price}`.toLocaleLowerCase().includes(searchTerm.toLowerCase());
    });
  }

}
