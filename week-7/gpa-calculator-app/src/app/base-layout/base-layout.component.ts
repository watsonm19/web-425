/*
===============================================
; Title:  Exercise 7.3 - Form Validation
; Author: Mark Watson
; Date: 11 July 2021
; Description: Base layout components.
;==============================================
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})

// Base Layout component class
export class BaseLayoutComponent implements OnInit {

  app: string;

  constructor(private cookieService: CookieService, private router: Router) {
    // app title
    this.app = 'GPA Calculator';
  }

  ngOnInit(): void {
  }

  // sign out user
  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in']);
  }

}
