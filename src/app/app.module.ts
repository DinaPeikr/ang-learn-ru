import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BASE_URL_TOKEN, baseUrl} from './services/config';
import {InterceptorsService} from './services/interceptors.service';
import {ModalModule} from './modal/modal.module';
import {ErrorPageComponent} from './pages/error-page/error-page.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {effects} from './store/effects';


@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,

  ],
  imports: [
    SharedModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    AppRoutingModule,
    // @ts-ignore
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        // @ts-ignore
        strictStateImmutability: false,
        strictActionImmutability: false
      }
    }),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [
    // {
    //   provide: ProductsService,
    //   useClass: ProductsService
    // }
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorsService,
      multi: true
    },
    {
      provide: BASE_URL_TOKEN,
      useValue: baseUrl,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
