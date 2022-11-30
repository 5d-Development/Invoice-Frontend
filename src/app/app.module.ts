import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { GoogleChartsModule } from 'angular-google-charts';
import { NgxPaginationModule } from 'ngx-pagination';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { LoaderComponent } from './loader/loader.component';
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
import { LogSummaryComponent } from './activity-log/log-summary/log-summary.component';
import { InvoicesSummaryComponent } from './invoices/invoices-summary/invoices-summary.component';
import { CurrencySummaryComponent } from './invoices/currency-summary/currency-summary.component';
import { ExpensesSummaryComponent } from './expenses/expenses-summary/expenses-summary.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { HeaderTitleComponent } from './top-header/header-title/header-title.component';
import { NotificationComponent } from './notification/notification.component';
import { AdminComponent } from './admin/admin.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NewEditInvoiceComponent } from './invoices/new-edit-invoice/new-edit-invoice.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NewTeamMemberComponent } from './team/new-team-member/new-team-member.component';
import { DeleteTeamMemberComponent } from './team/delete-team-member/delete-team-member.component';
import { EditTeamMemberComponent } from './team/edit-team-member/edit-team-member.component';
import { PreviewInvoiceComponent } from './invoices/preview-invoice/preview-invoice.component';
import { DeleteInvoiceComponent } from './invoices/delete-invoice/delete-invoice.component';
import { ItemsComponent } from './items/items.component';
import { NewItemComponent } from './items/new-item/new-item.component';
import { DeleteItemComponent } from './items/delete-item/delete-item.component';

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
    TeamSummaryComponent,
    LogSummaryComponent,
    InvoicesSummaryComponent,
    CurrencySummaryComponent,
    ExpensesSummaryComponent,
    TopHeaderComponent,
    HeaderTitleComponent,
    NotificationComponent,
    AdminComponent,
    NewEditInvoiceComponent,
    NewTeamMemberComponent,
    DeleteTeamMemberComponent,
    EditTeamMemberComponent,
    PreviewInvoiceComponent,
    DeleteInvoiceComponent,
    ItemsComponent,
    NewItemComponent,
    DeleteItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    GoogleChartsModule,
    NgxPaginationModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]
      }
    }),
    NgbModule,
    FormsModule
  ],
  providers: [
    DashboardComponent,
    InvoicesComponent,
    ExpensesComponent,
    ClientsComponent,
    TeamComponent,
    SettingsComponent,
    ActivityLogComponent,
    DeleteInvoiceComponent,
    NewItemComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Method for Implemnt Translation
export function HttpLoaderFactory (http:HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');

}
