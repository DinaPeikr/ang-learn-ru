import { Component, OnInit } from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent implements OnInit {
  public title!: string;
  public drawerFromHome!: MatDrawer;

  constructor() {
  }

  ngOnInit(): void {
    this.title = 'Angular-learn-ru';

  }
  public setDrawer(drawer: MatDrawer): void {
    this.drawerFromHome = drawer;
  }

}
