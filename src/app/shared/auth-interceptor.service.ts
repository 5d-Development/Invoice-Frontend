import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, Observable, take } from 'rxjs';
import { LoginService } from '../login/services/login.service';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private authLoginService:LoginService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    this.authLoginService.userLoginResponse
      .pipe(
        take(1),
        exhaustMap(userLoginResponse =>{
          console.log(userLoginResponse)
            const modiefyReq=req.clone({
              setHeaders: {
                'Content-Type' : 'application/json; charset=utf-8',
                'Accept'       : 'application/json',
                'Authorization': `Bearer ssssssssss`,
              },
            })
          return next.handle(modiefyReq)
          })
      )
    return next.handle(req)
        }
  }
