/*
============================================
; Title:  Assignment 2.3 - Data Binding
; Author: Mark Watson
; Date: 6 June 2021
; Description: App components.
;===========================================
*/

// imports required modules
import { Component } from '@angular/core';

// default component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// exports app component
export class AppComponent {
  isLoggedIn: Boolean = true;

  assignment: string = 'Exercise 2.3 - Data Binding';
}
