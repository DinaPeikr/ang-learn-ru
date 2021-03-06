import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import {ModalService} from '../services/modal.service';



@NgModule({
  declarations: [ModalComponent],
  exports: [
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  // providers: [
  //   ModalService
  // ]
})
export class ModalModule {
  /* для ленивой загрузки, например */
  public static forRoot(): ModuleWithProviders<any>{
    return {
      ngModule: ModalModule,
      providers: [
        ModalService
       ]
    };
  }
}
