/*
===============================================
; Title:  Assignment 3.3 - Passing Data to Routes, Part 2
; Author: Mark Watson
; Date: 13 June 2021
; Description: Sign-in components.
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  // user is not logged in by default
  isLoggedIn = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  // signs in user
  signIn() {
    this.isLoggedIn = true;

    this.router.navigate(['/home'], {queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})
  }
}
