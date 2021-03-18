import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

// @ts-ignore
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(
    _next: ActivatedRouteSnapshot,
    {url}: RouterStateSnapshot): Observable<boolean> {
    return of(true).pipe(
      switchMap((isLogged: boolean): Observable<boolean> => {
        if (!isLogged && (url === '/login' || url === '/signup')) {
          return of(true);
        }
        if (isLogged && (url === '/login' || url === '/signup')) {
          this.router.navigate(['/backoffice']);
          return of(false);
        }
        if (!isLogged) {
          this.router.navigate(['/login']);
        }

        return of(isLogged);
      })
    );
  }

}
