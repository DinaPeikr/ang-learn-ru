import {Component, Input, OnInit} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';
import {IState} from '../../../store';
import {Store} from '@ngrx/store';
import {selectProductInCart, totalProducts} from '../../../store/reducers/cart.reducers';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 public cartProductCount$: Observable<number> = this.store.select(totalProducts);
  public products$ = this.store.select(selectProductInCart);

  @Input()
  public set title(t: string){
    this.OwnTitle = t;
  }

  public OwnTitle!: string;

  @Input()
  public drawerFromHeader!: MatDrawer;

  constructor(private store: Store<IState> ) {
  }

  ngOnInit(): void {
    //  this.products$.subscribe(p => {
    //    this.count = p.length;
    // });
  }

  setShare($event: MouseEvent): void {
    console.log('click Share', $event.target);
  }

  public toggleSideNavFromHeader(): void {
    // console.log('Header Drawer', this.drawerFromHeader);
    this.drawerFromHeader?.toggle().then(r => {
      console.log(r);
    });
  }
}
