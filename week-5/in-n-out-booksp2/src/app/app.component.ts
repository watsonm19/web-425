/*
===============================================
; Title:  Exercise 5.3 - Data Tables
; Author: Mark Watson
; Date: 27 June 2021
; Description: App components.
;==============================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  assignment: string;

  constructor() {
    this.assignment = 'Exercise 5.3 - Data Tables';
  }
}
