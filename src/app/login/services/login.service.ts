import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { UserLoginInfo } from '../user-login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userLoginInfo:UserLoginInfo;
  API_URL_BASE='http://invoices.5d-dev.com/api/';
  loginErrorMessage = new BehaviorSubject<string>("");
  loginSucessMessage = new BehaviorSubject<string>("");
  flagError = new Subject<boolean>();
  flagSucess = new Subject<boolean>();


  constructor(private authService:AuthenticationService,
              private router:Router) { 
  }

  userLogin(userLoginInfo:UserLoginInfo){
  let userEmail=userLoginInfo.Email;
  this.authService.fetchLoginIn(userLoginInfo)
  .subscribe(responseData => {
      console.log(responseData)
      this.flagSucess.next(true);
      this.flagError.next(false);
      this.loginSucessMessage.next(userEmail);
      this.router.navigate(['admin'])
    },
    errorMessage =>{
      console.log(errorMessage)
      this.flagError.next(true);
      this.flagSucess.next(false);
      this.loginErrorMessage.next(errorMessage);
    }
    )
  }
}
