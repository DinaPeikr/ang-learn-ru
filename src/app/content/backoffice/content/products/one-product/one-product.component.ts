import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IProduct} from '../../../../../services/products.service';
import {pluck} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ModalService} from '../../../../../services/modal.service';
import {Store} from '@ngrx/store';
import {IState} from '../../../../../store';
import {addProductToCart} from '../../../../../store/actions/cart.action';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css']
})
export class OneProductComponent implements OnInit {
  public productId!: string;
  public product$!: Observable<IProduct>;

  constructor(private activatedRoute: ActivatedRoute,
              private readonly modalService: ModalService,
              private store: Store<IState>,
              private router: Router
  ) {
    // console.log(this.activatedRoute);
    // console.log(this.activatedRoute.snapshot);
    // console.log(this.activatedRoute.params);
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => console.log(data));
    this.activatedRoute.params.subscribe(({id}) => {
      this.productId = id;
    });
    this.activatedRoute.data.pipe(
      pluck('product'),
    ).subscribe((p) => {
      this.product$ = p;
    });
    this.activatedRoute.queryParams.subscribe(v => console.log(v));
    setTimeout(() => {
      this.router.navigate(['./'], {queryParams: {page: 1, skip: 10}, relativeTo: this.activatedRoute});
    }, 7000);
  }

  async addToCard(): Promise<void> {
    const {CardConfirmComponent} = await import('../shop-card/card-confirm/card-confirm.component');
    this.modalService.open({
      component: CardConfirmComponent,
      context: {
        product: {...this.product$},
        save: () => {
          console.log('save');
          this.store.dispatch(addProductToCart({product: this.product$}));
          this.modalService.close();
        },
        cancel: () => {
          console.log('cancel');
          this.modalService.close();
        },
      }
    });
  }
}
