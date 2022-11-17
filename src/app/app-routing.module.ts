import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { ClientsComponent } from './clients/clients.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { LoaderComponent } from './loader/loader.component';
import { ChangePasswordComponent } from './login/change-password/change-password.component';
import { LoginComponent } from './login/login.component';
import { SetNewPasswordComponent } from './login/set-new-password/set-new-password.component';
import { SettingsComponent } from './settings/settings.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {
    path: "",
    component: LoaderComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "change-password",
    component: ChangePasswordComponent
  },
  {
    path: "set-new-password",
    component: SetNewPasswordComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "invoices",
    component: InvoicesComponent
  },
  {
    path: "expenses",
    component: ExpensesComponent
  },
  {
    path: "clients",
    component: ClientsComponent
  },
  {
    path: "team",
    component: TeamComponent
  },
  {
    path: "settings",
    component: SettingsComponent
  },
  {
    path: "activity-log",
    component: ActivityLogComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
