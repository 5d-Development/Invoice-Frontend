import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';
import { ActiveTabService } from '../shared/active-tab.service';
import { PageEvent } from '@angular/material/paginator';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  activeTab: string = '';
  activeIcon: string = '../../assets/img/invoice.svg';
  date_value: string = 'Sort By';
  status_value: string = 'Status';
  page_number: number = 1;
  itemPerPage: number = 10;
  collection: string[] = [];

  activeTitleSubscribtion: Subscription = new Subscription;
  constructor(private route: ActivatedRoute, 
              private activeTabService: ActiveTabService,
              public translate:TranslateService) {
                
    for (let i = 1; i <= 25; i++) {
      this.collection.push(`${i * 13001}`);
    }
  }
  change_date_value(el: HTMLElement) {
    this.date_value = el.innerHTML;
  }

  change_status_value(el: HTMLElement) {
    this.status_value = el.innerHTML;
  }

  ngOnInit(): void {
    this.activeTitleSubscribtion = this.route.data.subscribe(
      (data: Data) => {
        this.activeTab = data['activeTab'];
        this.activeTabService.activeTabs.next
          (
            {
              activeTab: this.activeTab,
              activeIcon: this.activeIcon
            }
          )
      }
    );
  }

  ngOnDestroy(): void {
    this.activeTitleSubscribtion.unsubscribe();
  }

}
