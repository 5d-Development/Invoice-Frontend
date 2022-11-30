import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PasswordValidators } from './password.validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ChangePasswordForm = new FormGroup({
    old_password: new FormControl('', [Validators.required]),
    passwords: new FormGroup(
      {
        new_password: new FormControl('', [Validators.required]),
        confirm_new_password: new FormControl('', [Validators.required])
      },[PasswordValidators.MatchValidator('new_password', 'confirm_new_password')]
      )
  },
  );

  get passwordMatchError() {
    return (
      this.ChangePasswordForm.get('passwords')?.getError('mismatch') &&
      this.ChangePasswordForm.get('passwords.confirm_new_password')?.touched
    );
  }



  formSubmit() {
    console.log(this.ChangePasswordForm)
    console.log( this.ChangePasswordForm.get('passwords'))
  }

  ngOnInit(): void {
  }
}
