import {Component, HostListener} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {SwitcherBaseComponent} from './switcher-base.component';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SwitcherComponent,
      multi: true
    }
  ]
})
// export class SwitcherComponent implements ControlValueAccessor {
export class SwitcherComponent extends SwitcherBaseComponent {
  // public internalValue!: boolean;
  // private onChangeCb!: (checked: boolean) => void;

  @HostListener('click')
  public toggle(): void {
    super.toggle();
  }

  // @HostListener('click')
  // public toggle(): void {
  //   this.internalValue = !this.internalValue;
  //   this.onChangeCb(this.internalValue);
  // }
  //
  // writeValue(checked: boolean): void {
  //   this.internalValue = checked;
  // }
  //
  // registerOnChange(fn: (checked: boolean) => void): void {
  //   this.onChangeCb = fn;
  // }
  //
  // registerOnTouched(_fn: any): void {
  // }


}
