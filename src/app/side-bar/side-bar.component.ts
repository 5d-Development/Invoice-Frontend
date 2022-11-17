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

  new_item: boolean = true;
  is_open: boolean = false;
  title: string = "";
  currentRoute: string = "";
  title_icon_source: String = "";
  width: string = '';
  color1: string = ''; color2: string = ''; color3: string = ''; color4: string = ''; color5: string = ''; color6: string = ''; color7: string = '';
  dashboard_icon: string = "../../../assets/img/chart-line-solid-grey.svg";
  invoices_icon: string = "../../../assets/img/invoice-grey.svg";
  expenses_icon: string = "../../../assets/img/expenses-grey.svg";
  clients_icon: string = "../../../assets/img/clients-grey.svg";
  team_icon: string = "../../../assets/img/team-grey.svg";
  settings_icon: string = '../../../assets/img/settings-grey.svg';
  log_icon: string = '../../../assets/img/bell-grey.svg';

  constructor(
    private router: Router,
    private dashboard: DashboardComponent,
    private invoices: InvoicesComponent,
    private expenses: ExpensesComponent,
    private clients: ClientsComponent,
    private team: TeamComponent,
    private settings: SettingsComponent,
    private log: ActivityLogComponent,
    private activatedRoute: ActivatedRoute,
  ) { }

  // Change the title of the sidebar based on the current route url
  changeTitle() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        if (this.currentRoute == '/dashboard') {
          this.title = this.dashboard.title;
          this.title_icon_source = '../../../assets/img/chart-line-solid.svg';
          this.dashboard_icon = '../../../assets/img/chart-line-solid.svg'

          this.invoices_icon = '../../../assets/img/invoice-grey.svg';
          this.expenses_icon = '../../../assets/img/expenses-grey.svg';
          this.clients_icon = '../../../assets/img/clients-grey.svg';
          this.team_icon = '../../../assets/img/team-grey.svg';
          this.settings_icon = '../../../assets/img/settings-grey.svg';
          this.log_icon = '../../../assets/img/bell-grey.svg';
          this.width = 'width: 20px';
          this.color1 = 'color: #731991;';
          this.color2 = 'color: #959595;';
          this.color3 = 'color: #959595;';
          this.color4 = 'color: #959595;';
          this.color5 = 'color: #959595;';
          this.color6 = 'color: #959595;';
          this.color7 = 'color: #959595;';
        }

        if (this.currentRoute == '/invoices') {
          this.title = this.invoices.title;
          this.title_icon_source = '../../../assets/img/invoice.svg';
          this.invoices_icon = '../../../assets/img/invoice.svg';

          this.dashboard_icon = '../../../assets/img/chart-line-solid-grey.svg';
          this.expenses_icon = '../../../assets/img/expenses-grey.svg';
          this.clients_icon = '../../../assets/img/clients-grey.svg';
          this.team_icon = '../../../assets/img/team-grey.svg';
          this.settings_icon = '../../../assets/img/settings-grey.svg';
          this.log_icon = '../../../assets/img/bell-grey.svg';
          this.width = 'width: 15px';
          this.color2 = 'color: #731991;';
          this.color1 = 'color: #959595;';
          this.color3 = 'color: #959595;';
          this.color4 = 'color: #959595;';
          this.color5 = 'color: #959595;';
          this.color6 = 'color: #959595;';
          this.color7 = 'color: #959595;';
        }

        if (this.currentRoute == '/expenses') {
          this.title = this.expenses.title;
          this.title_icon_source = '../../../assets/img/expenses.svg';
          this.expenses_icon = '../../../assets/img/expenses.svg';

          this.invoices_icon = '../../../assets/img/invoice-grey.svg';
          this.dashboard_icon = '../../../assets/img/chart-line-solid-grey.svg';
          this.clients_icon = '../../../assets/img/clients-grey.svg';
          this.team_icon = '../../../assets/img/team-grey.svg';
          this.settings_icon = '../../../assets/img/settings-grey.svg';
          this.log_icon = '../../../assets/img/bell-grey.svg';
          this.width = 'width: 15px';
          this.color3 = 'color: #731991;';
          this.color2 = 'color: #959595;';
          this.color1 = 'color: #959595;';
          this.color4 = 'color: #959595;';
          this.color5 = 'color: #959595;';
          this.color6 = 'color: #959595;';
          this.color7 = 'color: #959595;';
        }

        if (this.currentRoute == '/clients') {
          this.title = this.clients.title;
          this.title_icon_source = '../../../assets/img/clients.svg';
          this.clients_icon = '../../../assets/img/clients.svg';

          this.invoices_icon = '../../../assets/img/invoice-grey.svg';
          this.dashboard_icon = '../../../assets/img/chart-line-solid-grey.svg';
          this.team_icon = '../../../assets/img/team-grey.svg';
          this.settings_icon = '../../../assets/img/settings-grey.svg';
          this.expenses_icon = '../../../assets/img/expenses-grey.svg';
          this.log_icon = '../../../assets/img/bell-grey.svg';
          this.width = 'width: 20px';
          this.color4 = 'color: #731991;';
          this.color2 = 'color: #959595;';
          this.color3 = 'color: #959595;';
          this.color1 = 'color: #959595;';
          this.color5 = 'color: #959595;';
          this.color6 = 'color: #959595;';
          this.color7 = 'color: #959595;';
        }
        if (this.currentRoute == '/team') {
          this.title = this.team.title;
          this.title_icon_source = '../../../assets/img/team.svg';
          this.team_icon = '../../../assets/img/team.svg';

          this.invoices_icon = '../../../assets/img/invoice-grey.svg';
          this.dashboard_icon = '../../../assets/img/chart-line-solid-grey.svg';
          this.settings_icon = '../../../assets/img/settings-grey.svg';
          this.expenses_icon = '../../../assets/img/expenses-grey.svg';
          this.clients_icon = '../../../assets/img/clients-grey.svg';
          this.log_icon = '../../../assets/img/bell-grey.svg';
          this.width = 'width: 20px';
          this.color5 = 'color: #731991;';
          this.color2 = 'color: #959595;';
          this.color3 = 'color: #959595;';
          this.color4 = 'color: #959595;';
          this.color1 = 'color: #959595;';
          this.color6 = 'color: #959595;';
          this.color7 = 'color: #959595;';
        }
        if (this.currentRoute == '/settings') {
          this.title = this.settings.title;
          this.title_icon_source = '../../../assets/img/settings.svg';
          this.settings_icon = '../../../assets/img/settings.svg';

          this.invoices_icon = '../../../assets/img/invoice-grey.svg';
          this.dashboard_icon = '../../../assets/img/chart-line-solid-grey.svg';
          this.expenses_icon = '../../../assets/img/expenses-grey.svg';
          this.clients_icon = '../../../assets/img/clients-grey.svg';
          this.log_icon = '../../../assets/img/bell-grey.svg';
          this.team_icon = '../../../assets/img/team-grey.svg';
          this.width = 'width: 20px';
          this.color6 = 'color: #731991;';
          this.color2 = 'color: #959595;';
          this.color3 = 'color: #959595;';
          this.color4 = 'color: #959595;';
          this.color5 = 'color: #959595;';
          this.color1 = 'color: #959595;';
          this.color7 = 'color: #959595;';
        }
        if (this.currentRoute == '/activity-log') {
          this.title = this.log.title;
          this.title_icon_source = '../../../assets/img/bell.svg';
          this.log_icon = '../../../assets/img/bell.svg';

          this.invoices_icon = '../../../assets/img/invoice-grey.svg';
          this.dashboard_icon = '../../../assets/img/chart-line-solid-grey.svg';
          this.expenses_icon = '../../../assets/img/expenses-grey.svg';
          this.clients_icon = '../../../assets/img/clients-grey.svg';
          this.settings_icon = '../../../assets/img/settings-grey.svg';
          this.team_icon = '../../../assets/img/team-grey.svg';
          this.width = 'width: 20px';
          this.color7 = 'color: #731991;';
          this.color2 = 'color: #959595;';
          this.color3 = 'color: #959595;';
          this.color4 = 'color: #959595;';
          this.color5 = 'color: #959595;';
          this.color6 = 'color: #959595;';
          this.color1 = 'color: #959595;';
        }
      }
    });
  }

  logout() {
    this.router.navigate(['/'], { relativeTo: this.activatedRoute });
  }
  
  ngOnInit(): void {
    this.changeTitle();
  }

}
