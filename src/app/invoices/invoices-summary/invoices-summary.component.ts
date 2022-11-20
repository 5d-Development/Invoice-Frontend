import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoices-summary',
  templateUrl: './invoices-summary.component.html',
  styleUrls: ['./invoices-summary.component.scss']
})
export class InvoicesSummaryComponent implements OnInit {
  filter_value: string = 'Sort By';
  currency_value: string = 'Currency';

  constructor() { }

  change_filter_value(el: HTMLElement){
    this.filter_value = el.innerHTML;
  }

  change_currency_value(el: HTMLElement){
    this.currency_value = el.innerHTML;
  }

  ngOnInit(): void {
  }

}
