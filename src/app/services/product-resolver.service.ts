import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {IProduct, ProductsService} from './products.service';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class ProductResolverService implements Resolve<IProduct | null> {

  constructor(private router: Router,
              private productsService: ProductsService
              ) {
  }

  // tslint:disable-next-line:max-line-length
  resolve(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<IProduct | null> | Promise<IProduct | null> | IProduct | null {
    const id = route.paramMap.get('id');
    console.log(id);
    return this.productsService.getProduct(`${id}`)
      .pipe(
        map((product: any) => {
          if (!product) {
            this.router.navigate(['/backoffice'], {});
          }
          return product;
        }),
        catchError(() => {
          this.router.navigate(['/backoffice']);
          return of(null);
        })
  );
  }
}
