import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
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
import { SideBarComponent } from './header/side-bar/side-bar.component';
import { InvoicesComponent } from './invoices/invoices.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoaderComponent,
    LoginComponent,
    DashboardComponent,
    ChangePasswordComponent,
    SetNewPasswordComponent,
    SideBarComponent,
    InvoicesComponent
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
  providers: [SideBarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
