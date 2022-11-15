import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  show_success_Alert: boolean = false;
  show_failure_alert: boolean = false;

  LoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })


  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  formSubmit() {
    this.show_success_Alert = true;
    this.router.navigate(['/dashboard'], { relativeTo: this.activatedRoute });
  }

  ngOnInit(): void {
  }

}