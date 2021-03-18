import {Component, OnInit} from '@angular/core';
import {UnSubscriber} from './utils/unsubscriber';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent extends UnSubscriber implements OnInit {
  public title!: string;

  constructor(private router: Router) {
    super();
    this.router.events.subscribe(v => v);
  }

  ngOnInit(): void {
    this.title = 'Angular-learn-ru';
  }

}
