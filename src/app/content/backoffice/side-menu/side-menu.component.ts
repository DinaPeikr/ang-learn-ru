import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  @Output()
  public setDrawerControl: EventEmitter<MatDrawer> = new EventEmitter<MatDrawer>(true);

  @ViewChild('drawer', {read: MatDrawer, static: true})
  public drawerFromSideNav!: MatDrawer;

  constructor() {
  }

  ngOnInit(): void {
    this.setDrawerControl.emit(this.drawerFromSideNav);
  }

  public toggleSideNavFromItSelf(): void {
    console.log('sideMenu', this.drawerFromSideNav);
    this.drawerFromSideNav.toggle().then((r: any) => {
      console.log(r);
    });
  }
}
