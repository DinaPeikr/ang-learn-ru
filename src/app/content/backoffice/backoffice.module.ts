import {NgModule} from '@angular/core';
import {BackofficeComponent} from './backoffice.component';
import {BackofficeRoutingModule} from './backoffice-routing.module';
import {HeaderComponent} from './header/header.component';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {FooterComponent} from './footer/footer.component';
import {ExchangeRatesComponent} from './header/exchange-rates/exchange-rates.component';
import {ExchangeRatesDirective} from './header/exchange-rates/exchange-rates.directive';
import {HiddenDirective} from './header/exchange-rates/hidden.directive';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    BackofficeComponent,
    HeaderComponent,
    SideMenuComponent,
    FooterComponent,
    ExchangeRatesComponent,
    ExchangeRatesDirective,
    HiddenDirective,
  ],
  imports: [
    SharedModule,
    BackofficeRoutingModule,
  ]
})
export class BackofficeModule {
}
