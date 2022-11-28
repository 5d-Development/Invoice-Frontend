export class LoginResponseModel{
    constructor(
       private _token:string ,
       private _tokenExpirationDate:Date 
    ){}


    getToken(){
        if(!this._token || new Date() > this._tokenExpirationDate){
            return null;
        }
        return this._token;
    }
}
const firstObject = new LoginResponseModel('',new Date)