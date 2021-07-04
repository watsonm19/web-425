/*
===============================================
; Title:  Exercise 6.2 - Input/Output Properties, Part 1
; Author: Mark Watson
; Date: 03 July 2021
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
    this.assignment = 'Exercise 6.2 - Input/Output Properties, Part 1';
  }
}
