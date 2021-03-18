import {Component, Input, OnInit} from '@angular/core';
import {IProduct, ProductsService} from '../../../../../services/products.service';
import {ModalService} from '../../../../../services/modal.service';
import {IState} from '../../../../../store';
import {Store} from '@ngrx/store';
import {addProductToCart} from '../../../../../store/actions/cart.action';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.css']
})
export class ShopCardComponent implements OnInit {
  @Input() public product!: IProduct;
  @Input() public index!: number;

  constructor(private productsService: ProductsService,
              private readonly modalService: ModalService,
              private store: Store<IState>) {
    console.log(this.productsService.timestamp);
  }

  ngOnInit(): void {

  }

 async addToCard(): Promise<void> {
    const {CardConfirmComponent} = await import('./card-confirm/card-confirm.component');
    this.modalService.open({
      component: CardConfirmComponent,
      context: {
        product: {...this.product},
        save: () => {
          console.log('save');
          this.store.dispatch(addProductToCart({product: this.product}));
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
