import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Renderer2, Inject } from '@angular/core';
import { CurrencyApiService } from 'src/app/shared/currency-api.service';

@Component({
  selector: 'app-currency-summary',
  templateUrl: './currency-summary.component.html',
  styleUrls: ['./currency-summary.component.scss']
})
export class CurrencySummaryComponent implements OnInit {

  data_results: any;
  currency_obj: { [key: string]: number } = { EGP: 0, EUR: 0, GBP: 0, USD: 0 };
  constructor(private currency_api: CurrencyApiService) { }

  ngOnInit(): void {
    this.currency_api.getCurrency_USD().subscribe((data: any) => {
      this.data_results = data['result'];
      this.currency_obj['EGP'] = this.data_results['EGP'];
    });

    this.currency_api.getCurrency_EUR().subscribe((data: any) => {
      this.data_results = data['result'];
      this.currency_obj['EUR'] = this.data_results['EGP'];
    });

    this.currency_api.getCurrency_GBP().subscribe((data: any) => {
      this.data_results = data['result'];
      this.currency_obj['GBP'] = this.data_results['EGP'];
    });
  }
}
