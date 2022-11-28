import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, Observable, take } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private authService:AuthenticationService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.authService.userLoginResponse
      .pipe(
        take(1),
        exhaustMap(user =>{
          console.log(user)
            const modiefyReq=req.clone({
              params:new HttpParams().set('auth' ,'jjjjjj')
            })
          return next.handle(modiefyReq)
          })
      )
    return next.handle(req)
  }
}
