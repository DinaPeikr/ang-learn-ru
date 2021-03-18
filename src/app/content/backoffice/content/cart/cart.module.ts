import {NgModule} from '@angular/core';
import {CartRoutingModule} from './cart-routing.module';
import {SharedModule} from '../../../../shared/shared.module';
import {CartComponent} from './cart.component';
import {CartProductComponent} from './cart-product/cart-product.component';
import {DeafultComponent} from './deafult/deafult.component';
import {OnPushComponent} from './on-push/on-push.component';

@NgModule({
  declarations: [
    CartComponent,
    CartProductComponent,
    DeafultComponent,
    OnPushComponent
  ],
  imports: [
    SharedModule,
    CartRoutingModule,
  ]
})
export class CartModule {
}
