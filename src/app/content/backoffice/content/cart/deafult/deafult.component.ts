import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Person} from '../cart.component';

@Component({
  selector: 'app-deafult',
  templateUrl: './deafult.component.html',
  styleUrls: ['./deafult.component.css']
})
export class DeafultComponent implements OnInit {
  @Input()
  public user!: Person;

  constructor(
    private cdr: ChangeDetectorRef,
    // private zone: NgZone
  ) {
    this.cdr.detach();
    setTimeout(() => {
      this.cdr.reattach();
    }, 11000);

    // vk.getUSer(user => {
    //   this.zone.run(() => {
    //     this.user = user;
    //   });
    // });
  }

  ngOnInit(): void {
  }

}
