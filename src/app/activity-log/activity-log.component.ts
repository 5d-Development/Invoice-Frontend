import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute ,Data} from '@angular/router';
import { Subscription } from 'rxjs';
import { ActiveTabService } from '../shared/active-tab.service';

@Component({
  selector: 'app-activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.scss']
})
export class ActivityLogComponent implements OnInit ,OnDestroy{
  activeTab: string='';
  activeIcon: string = '../../assets/img/bell.svg';
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
