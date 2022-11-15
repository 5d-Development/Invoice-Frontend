import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  ChangePasswordForm = new FormGroup({
    old_password: new FormControl('', [Validators.required]),
    new_password: new FormControl('', [Validators.required]),
    confirm_new_password: new FormControl('', [Validators.required])
  },
  );




  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  formSubmit() {
    this.router.navigate(['/dashboard'], { relativeTo: this.activatedRoute });
  }

  ngOnInit(): void {
  }
}
