import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {IModalData} from '../modal/modal.component';

@Injectable()
export class ModalService {
    #controls$ = new Subject<IModalData | null>();

  constructor() {
  }

  public open(data: IModalData | null): void {
    this.#controls$.next(data);
  }

  public close(): void {
    this.#controls$.next(null);
  }

  public get controlsSequence$(): Observable<any> {
    return this.#controls$.asObservable();
  }
}
