import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  closeAsideStatus:boolean= true;
  @ViewChild('drawer ', { read: ElementRef }) drawer :ElementRef;
 
  constructor(private route:ActivatedRoute , private renderer:Renderer2) { }

  ngOnInit(): void {
 
  }
  closeAsideBar(){
    this.closeAsideStatus=false;
  }
  toggle(){
    this.renderer.setStyle(this.drawer.nativeElement,'width','200px');
    this.closeAsideStatus=true;
  }


}
