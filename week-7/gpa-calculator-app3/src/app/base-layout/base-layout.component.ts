/*
===============================================
; Title:  Exercise 7.2 - Reactive Forms
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

  assignment: string;

  constructor(private cookieService: CookieService, private router: Router) {
    // assignment title
    this.assignment = 'Assignment 7.2 - Reactive Forms';
  }

  ngOnInit(): void {
  }

  // sign out user
  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in']);
  }

}
