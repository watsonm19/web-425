/*
===============================================
; Title:  Exercise 8.2 - Server-Side Communications
; Author: Mark Watson
; Date: 18 July 2021
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

  welcome: string;

  constructor() {
    this.welcome = 'Welcome to In-N-Out-Books';
  }
}
