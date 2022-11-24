import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Data } from '@angular/router';
import { ActiveTabService } from 'src/app/shared/active-tab.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-edit-invoice',
  templateUrl: './new-edit-invoice.component.html',
  styleUrls: ['./new-edit-invoice.component.scss']
})
export class NewEditInvoiceComponent implements OnInit {
  activeTab: string = '';
  activeIcon: string = '../../assets/img/invoice.svg';
  model1: NgbDateStruct;
  model2: NgbDateStruct;
  activeTitleSubscribtion: Subscription = new Subscription;
  constructor(private route: ActivatedRoute, private activeTabService: ActiveTabService) { }
  // Form
  invoice_form = new FormGroup({

  });

  submit_form() {
    console.log('invoice form submitted successfully');
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
