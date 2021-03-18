import { NgModule } from '@angular/core';
import {LoginComponent} from './login.component';
import {LoginRoutingModule} from './login-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {LoginFormExampleComponent} from './login-form-example.component';
import { UserValidatorDirective } from './user-validator.directive';

@NgModule({
  declarations: [LoginComponent, LoginFormExampleComponent, UserValidatorDirective],
  exports: [
    UserValidatorDirective
  ],
  imports: [
    SharedModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
