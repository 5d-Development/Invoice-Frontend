import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyApiService {
  API_KEY = '31e861a15e-706fbf9f13-rm22r3';
  constructor(private httpClient: HttpClient) { }

  public getCurrency_USD() {
    return this.httpClient.get(`https://api.fastforex.io/fetch-one?from=USD&to=EGP&api_key=${this.API_KEY}`);
  }

  public getCurrency_EUR() {
    return this.httpClient.get(`https://api.fastforex.io/fetch-one?from=EUR&to=EGP&api_key=${this.API_KEY}`);
  }

  public getCurrency_GBP() {
    return this.httpClient.get(`https://api.fastforex.io/fetch-one?from=GBP&to=EGP&api_key=${this.API_KEY}`);
  }
}
