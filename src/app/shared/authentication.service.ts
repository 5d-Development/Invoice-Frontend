import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { LoginResponseModel } from '../login/services/login-response.model';
import { UserLoginInfo } from '../login/user-login.model';

export interface AuthResponseData{
  "Token": string,
  "Expiration": string,
  "Message" ?: string 
}

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  API_URL_BASE='http://invoices.5d-dev.com/api/';
  userLoginResponse = new BehaviorSubject<LoginResponseModel |null>(null);

  constructor(private httpRequest:HttpClient) {
  }

  // Fetching Login Calling with API
  fetchLoginIn(userLoginInfo:UserLoginInfo){
      return this.httpRequest.post<AuthResponseData>(this.API_URL_BASE + 'Account/SignIn',userLoginInfo)
      .pipe(
        catchError(this.handleError),
        tap(
          responseData=>{
            const expireTokenDate = new Date(responseData.Expiration)
            const userLoginResponse = new LoginResponseModel(
              responseData.Token,
              expireTokenDate
            );
            this.userLoginResponse.next(userLoginResponse);
            localStorage.setItem('userLogin', JSON.stringify(userLoginResponse))
          }
        )
      )
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = "error happened";
      // A client-side or network error occurred. Handle it accordingly.
    if (error.error.status === 401) {
      errorMessage="Please Contact your administrator to make Account"
      return throwError(errorMessage);
    } 
      // The backend returned an unsuccessful response code.
    else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
