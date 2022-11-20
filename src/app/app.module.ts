import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './loader/loader.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChangePasswordComponent } from './login/change-password/change-password.component';
import { SetNewPasswordComponent } from './login/set-new-password/set-new-password.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ClientsComponent } from './clients/clients.component';
import { TeamComponent } from './team/team.component';
import { SettingsComponent } from './settings/settings.component';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { ClientsSummaryComponent } from './clients/clients-summary/clients-summary.component';
import { TeamSummaryComponent } from './team/team-summary/team-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    LoginComponent,
    DashboardComponent,
    ChangePasswordComponent,
    SetNewPasswordComponent,
    SideBarComponent,
    InvoicesComponent,
    ExpensesComponent,
    ClientsComponent,
    TeamComponent,
    SettingsComponent,
    ActivityLogComponent,
    ClientsSummaryComponent,
    TeamSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatProgressBarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,

    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [
    DashboardComponent,
    InvoicesComponent,
    ExpensesComponent,
    ClientsComponent,
    TeamComponent,
    SettingsComponent,
    ActivityLogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
