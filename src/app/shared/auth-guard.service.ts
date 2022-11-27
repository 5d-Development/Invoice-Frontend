import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

    constructor(private authService: AuthenticationService, private router: Router) {}
  
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return  true
   
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