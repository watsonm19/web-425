/*
===============================================
; Title:  Exercise 7.2 - Reactive Forms
; Author: Mark Watson
; Date: 11 July 2021
; Description: Sign-in components.
;==============================================
*/

import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private fb: FormBuilder,
    private signinService: SignInService
    ) {

  }

  ngOnInit(): void {
    this.signinForm = this.fb.group({studentId: ''});
  }

  // process sign-in
  onSubmit() {
    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId);

    if (this.signinService.validate(studentId)) {
      // go to home page if valid
      this.cookieService.set('session_user', studentId.toString(), 1);
      this.router.navigate(['/'])
    } else {
      // error message if invalid
      this.errorMessage = `The student ID you entered is invalid, please try again.`;
    }
  }

}
