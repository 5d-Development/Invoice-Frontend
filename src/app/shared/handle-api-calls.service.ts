import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
//import { API_URL_BASE } from 'src/environments/environment';
import { UserChangePassword } from '../login/change-password/change-password.model';

@Injectable({
  providedIn: 'root'
})
export class HandleApiCallsService {
  changePasswordEndpoint='Account/ChangePassword';

  constructor(private httpRequest:HttpClient) { }
  
  // Fetching Change Password Calling with API
  fetchUserChangePassword(UserChangePassword:UserChangePassword){
    return this.httpRequest.post(this.changePasswordEndpoint,UserChangePassword)
    .pipe(catchError(this.handleError))
}

  private handleError(error: HttpErrorResponse) {
    let errorMessage = "error happened";
    if (error.error.status === 401) {
      errorMessage="Please Contact your administrator to make Account"
      return throwError(errorMessage);
    } 
    else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
      errorMessage=error.error;
      return throwError(errorMessage);
    }
  }
}
