import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  page_number: number = 1;
  itemPerPage: number = 10;
  isEdit: boolean = true;
  items: object[] = [{ name: 'Item 1', desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus dicta autem.", unitPrice: 3000, quantity: 2, totalPrice: 6000 }];
  constructor() { }

  ngOnInit(): void {
  }

}
