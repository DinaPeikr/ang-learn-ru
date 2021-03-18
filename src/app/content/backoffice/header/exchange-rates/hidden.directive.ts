import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[appHidden]',
  exportAs: 'hiddenControl'
})
export class HiddenDirective {
  @HostBinding('style.opacity')
  public opacity: '0' | '1' = '0';

  // @HostListener('click', ['$event'])
  // public clickToEl(ev: MouseEvent, index: number): void {
  //   console.log(ev);
  //   console.log(index);
  //   if (index > 2){
  //     this.opacity = '0';
  //   }
  // }

  constructor() {
  }

  public showArrows(): void {
    this.opacity = '1';
  }

  public hideArrows(): void {
    this.opacity = '0';
  }
}
