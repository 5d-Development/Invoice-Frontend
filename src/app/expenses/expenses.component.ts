import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';
import { ActiveTabService } from '../shared/active-tab.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit ,OnDestroy{
  // public title: string = 'Expenses';
  activeTab: string='';
  activeIcon: string = '../../assets/img/expenses.svg';
  activeTitleSubscribtion: Subscription = new Subscription;
  constructor(private route:ActivatedRoute ,  private activeTabService:ActiveTabService) { }


  ngOnInit(): void {
   this.activeTitleSubscribtion = this.route.data.subscribe(
      (data: Data) => {
         this.activeTab=data['activeTab'];
         this.activeTabService.activeTabs.next
         (
          {
            activeTab:this.activeTab,
            activeIcon:this.activeIcon
          }
          )
      }
    );
  }

  ngOnDestroy(): void {
    this.activeTitleSubscribtion.unsubscribe();
  }

}
