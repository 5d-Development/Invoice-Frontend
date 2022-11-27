import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoginService } from '../login/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  //authToken:boolean = true;
  _isAuthinticated = new Subject<Boolean>;
  isAuth

  constructor(private loginService:LoginService) {
    this._isAuthinticated.next(false)
   this.isAuth=this._isAuthinticated.subscribe(
      (data =>{
        return data;
       // console.log(data)
      })
    )
  }

  // isAuthenticated() {
  //   const promise = new Promise<boolean >(
  //     (resolve, reject) => {
  //       setTimeout(() => {
  //        const Auth=JSON.parse(localStorage.getItem("auth")|| '{}');
  //        if(Auth===true){
  //         resolve(true);
  //        }
  //        else{
  //         resolve(false)
  //        }
     
  //       }, 800);
  //       // reject(this.isloggedOut())
  //     }
  //   );
  //   return promise;
  // }

  isloggedIn(userLoginInfo:object) {
    this.loginService.userLogin(userLoginInfo) 
     .subscribe((data:any)=>{
      console.log((data ? console.log(data) : console.log("no data")));
      console.log(data.Token)
      localStorage.setItem("auth",JSON.stringify(data.Token));
      this._isAuthinticated.next(true)
      console.log(this.isAuth)
    })


    return  this._isAuthinticated;

  }
  isloggedOut(){
    this._isAuthinticated.next(false)
    console.log("user is logged out");
    return this._isAuthinticated;

  }
}
