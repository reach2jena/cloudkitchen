import { Component } from '@angular/core';

/** @title Sidenav open & close behavior */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  events: string[] = [];
  opened: boolean = false;
  name: string = 'Rakesh';


  isShowing: boolean =false;

  toggleSidenav() {
    this.isShowing = !this.isShowing;
  }

  callMethods() {
    this.toggleSidenav();
  }
  returnMainPage()
  {
    this.isShowing = this.isShowing;
  }
}