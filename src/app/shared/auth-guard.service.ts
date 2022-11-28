import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, take, tap } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  isAuthienticatedUser:boolean = false;
  TokenObject:any;


    constructor(private authService: AuthenticationService, private router: Router) {}
  
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        // this.authService.userLoginResponse.pipe(take(1))
        // .subscribe(
        //   userTokenObject =>{ 
        //     console.log(userTokenObject)
        //     this.isAuthienticatedUser =!!userTokenObject
        //   }
        // );
        this.TokenObject=JSON.parse(localStorage.getItem('userLogin') || '{}' );
  
        if(Object.keys(this.TokenObject ).length === 0 ){
          this.router.navigate(['/'])
          return false
        }
        else {
          this.router.navigate(['/admin'])
          return true
        }
    }
  
}


// this.authService.isAuthenticated()
//         .then(
//           (authenticated: boolean) => {
//             if (authenticated) {
//               return true;
//             } else {
//               this.router.navigate(['/']);
//               return false;
//             }
//           }
//         );