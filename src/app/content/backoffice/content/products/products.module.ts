import { NgModule } from '@angular/core';
import {ProductsComponent} from './products.component';
import {ProductsRoutingModule} from './products-routing.module';
import {SharedModule} from '../../../../shared/shared.module';
import {ShopCardComponent} from './shop-card/shop-card.component';
import {ProductsFilterPipe} from '../../../../pipes/products-filter.pipe';
import { OneProductComponent } from './one-product/one-product.component';
// import {StoreModule} from '@ngrx/store';




@NgModule({
  declarations: [
    ProductsComponent,
    ShopCardComponent,
    ProductsFilterPipe,
    OneProductComponent
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule,
    // StoreModule.forFeature('products', productsReducer),
  ]
})

export class ProductsModule { }
