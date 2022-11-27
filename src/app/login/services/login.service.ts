import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLoginInfo } from '../user-login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userLoginInfo:UserLoginInfo;
  API_URL_BASE='http://invoices.5d-dev.com/api/'

  constructor(private httpRequest:HttpClient) { 
  }

  userLogin(userLoginInfo:object){
   return this.httpRequest.post(this.API_URL_BASE + 'Account/SignIn',userLoginInfo);
  
  }
}
