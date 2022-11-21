import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
  }
  logout() {
    this.router.navigate(['/'], { relativeTo: this.activatedRoute });
  }
}
