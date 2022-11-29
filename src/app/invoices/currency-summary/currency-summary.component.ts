import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Renderer2, Inject } from '@angular/core';
// import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-currency-summary',
  templateUrl: './currency-summary.component.html',
  styleUrls: ['./currency-summary.component.scss']
})
export class CurrencySummaryComponent implements OnInit {

  @ViewChild('currency_rate') el: ElementRef;
  constructor(private renderer2: Renderer2, @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://www.exchangeratewidget.com/converter.php?l=en&f=EGP&t=USD,EUR,GBP,JPY,CNY,RUB,&a=1&d=F0F0F0&n=FFFFFF&o=000000&v=7';
    s.text = ``;
    // this.renderer2.appendChild(this.el.nativeElement, s);
    // console.log(this.el.nativeElement);
    // this.el.nativeElement.appendChild(this.renderer2)
  }

}
