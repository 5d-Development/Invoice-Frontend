import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { AdminComponent } from './admin/admin.component';
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
  {path: "", component: LoaderComponent},
  {path: "login",component: LoginComponent},
  {path: "change-password",component: ChangePasswordComponent},
  {path: "set-new-password",component: SetNewPasswordComponent},
  {path: "admin",component:AdminComponent,children:[
    {path: "",component: DashboardComponent, data: {activeTab:'Dashboard'}},
    {path: "dashboard",component: DashboardComponent, data: {activeTab:'Dashboard'}},
    {path: "invoices",component: InvoicesComponent, data: {activeTab:'Invoices'}},
    {path: "expenses",component: ExpensesComponent, data: {activeTab:'Expenses'}},
    {path: "clients",component: ClientsComponent , data: {activeTab:'Clients'}},
    {path: "team",component: TeamComponent, data: {activeTab:'Teams'}},
    {path: "settings",component: SettingsComponent, data: {activeTab:'Settings'}},
    {path: "activity-log",component: ActivityLogComponent, data: {activeTab:'Activity Log'}},
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
