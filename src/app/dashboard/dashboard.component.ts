import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '../header/side-bar/side-bar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  is_open: boolean = false;
  constructor(private sidebar: SideBarComponent) { }

  ngOnInit(): void {
    this.is_open = this.sidebar.is_open;
  }

}
