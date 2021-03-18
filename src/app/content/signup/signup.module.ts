import { NgModule } from '@angular/core';
import {SignupComponent} from './signup.component';
import {SignupRoutingModule} from './signup-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {LoginModule} from '../login/login.module';
import { SwitcherComponent } from './switcher/switcher.component';



@NgModule({
  declarations: [SignupComponent, SwitcherComponent],
  imports: [
    SharedModule,
    SignupRoutingModule,
    LoginModule,
  ]
})
export class SignupModule { }
