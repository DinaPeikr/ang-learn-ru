import {HostListener, Injectable} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';

@Injectable()
export class SwitcherBaseComponent implements ControlValueAccessor {
  public internalValue!: boolean;
  protected onChangeCb!: (checked: boolean) => void;

  @HostListener('click')
  public toggle(): void {
    this.internalValue = !this.internalValue;
    this.onChangeCb(this.internalValue);
  }

  writeValue(checked: boolean): void {
   // debugger;
    this.internalValue = checked;
  }

  registerOnChange(fn: (checked: boolean) => void): void {
    this.onChangeCb = fn;
  }

  registerOnTouched(_fn: any): void {
  }


}
