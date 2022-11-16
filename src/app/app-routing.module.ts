import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { LoaderComponent } from './loader/loader.component';
import { ChangePasswordComponent } from './login/change-password/change-password.component';
import { LoginComponent } from './login/login.component';
import { SetNewPasswordComponent } from './login/set-new-password/set-new-password.component';

const routes: Routes = [
  {
    path: "",
    component: LoaderComponent
  },
  {
    path: "header",
    component: HeaderComponent
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
