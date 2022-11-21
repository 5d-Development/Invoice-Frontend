import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, ActivatedRoute } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { InvoicesComponent } from '../invoices/invoices.component';
import { ExpensesComponent } from '../expenses/expenses.component';
import { ClientsComponent } from '../clients/clients.component';
import { TeamComponent } from '../team/team.component';
import { SettingsComponent } from '../settings/settings.component';
import { ActivityLogComponent } from '../activity-log/activity-log.component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  closeAsideStatus:boolean= false;
 
  constructor() { }


  ngOnInit(): void {
    console.log(this.closeAsideStatus)
  }
  closeAsideBar(){
    this.closeAsideStatus=! this.closeAsideStatus;
    console.log(this.closeAsideStatus)
  }

}
