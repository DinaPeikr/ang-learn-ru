import {Subject} from 'rxjs';
import {Injectable, OnDestroy} from '@angular/core';

@Injectable()
export abstract class UnSubscriber implements OnDestroy {
  public UnSubscriber$ = new Subject();
  ngOnDestroy(): void {
    this.UnSubscriber$.next();
    this.UnSubscriber$.complete();
  }

  // public sub: Subscription[] = [];
  // public ngOnDestroy(): void {
  //   this.sub.forEach(s => s.unsubscribe());
  // }
}
