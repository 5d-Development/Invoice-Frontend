export class LoginResponseModel{
    constructor(
       private _token:string ,
       private _tokenExpirationDate:Date 
    ){}


    getToken(){
        if(!this._token || new Date() > this._tokenExpirationDate){
            localStorage.removeItem('userLogin');
            return null;
        }
        return this._token;
    }
}
