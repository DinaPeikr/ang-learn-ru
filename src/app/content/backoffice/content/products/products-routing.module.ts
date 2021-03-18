import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from './products.component';
import {OneProductComponent} from './one-product/one-product.component';
import {ProductResolverService} from '../../../../services/product-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: ':id',
    component: OneProductComponent,
    data: {title: 'Product Page'},
    resolve: {product: ProductResolverService}
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

// @ts-ignore
export class ProductsRoutingModule {
}
