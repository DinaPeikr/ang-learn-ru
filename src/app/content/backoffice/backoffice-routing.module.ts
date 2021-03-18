import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BackofficeComponent} from './backoffice.component';

const routes: Routes = [

  {
    path: '',
    component: BackofficeComponent,
    children: [
      {
        path: 'cart',
        loadChildren: () => import('./content/cart/cart.module').then(m => m.CartModule)
      },
      {
        path: '',
        loadChildren: () => import('./content/products/products.module').then(m => m.ProductsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule {
}
