import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Person} from '../cart.component';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent implements OnInit {
  @Input()
  public user!: Person;
  constructor() { }

  ngOnInit(): void {
  }

}
