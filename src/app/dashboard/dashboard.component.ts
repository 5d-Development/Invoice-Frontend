import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  is_open: boolean = false;
  public title: string = 'Dashboard';

  constructor() { }

  ngOnInit(): void {
    // this.is_open = this.sidebar.is_open;
  }

}
