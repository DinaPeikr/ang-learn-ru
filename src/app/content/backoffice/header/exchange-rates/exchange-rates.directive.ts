import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appExchangeRates]'
})
export class ExchangeRatesDirective implements OnInit {

// tslint:disable-next-line:no-input-rename
  @Input('appExchangeRatesFrom')
  public rates!: { value: number, currently: string }[];

  // tslint:disable-next-line:no-input-rename
  @Input('appExchangeRatesInterval')
  public ms = 1000;


  @Input('appExchangeRatesAutoplay')
  public set playAuto(mode: 'off' | 'on') {
    if (!mode) {
      return;
    }
    this.autoplay = mode;
  }
  public context: any;
  public autoplay = 'on';
  public index = 0;
  private intervalId!: number | null;


  constructor(
    private readonly tml: TemplateRef<any>,
    private readonly vcr: ViewContainerRef,
  ) {
  }

  public ngOnInit(): void {
    this.context = {
      $implicit: this.rates[this.index],
      index: this.index,
      controller: {
        nextItem: () => this.next(),
        prevItem: () => this.prev(),
      }
    };

    this.vcr.createEmbeddedView(this.tml, this.context);
    this.resetInterval();
  }

  public next(): void {
    this.resetInterval();
    this.index++;
    if (this.index >= this.rates.length) {
      this.index = 0;
    }
    this.context.$implicit = this.rates[this.index];
    this.context.index = this.index;
    // console.log(this.context.index);
  }

  public prev(): void {
    this.resetInterval();
    this.index--;
    if (this.index < 0) {
      this.index = this.rates.length - 1;
    }
    this.context.$implicit = this.rates[this.index];
    this.context.index = this.index;
    // console.log(this.context.index);
  }

  private resetInterval(): void {
    if (this.autoplay !== 'on') {
      return;
    }
    this.clearInterval().initInterval();
  }

  private initInterval(): this {
    // console.log(this.ms);
    this.intervalId = setInterval(() => {
      this.next();
    }, this.ms);
    return this;
  }

  private clearInterval(): this {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    return this;
  }
}
