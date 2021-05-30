/*
============================================
; Title:  Exercise 1.3 - Angular CLI
; Author: Mark Watson
; Date: 29 May 2021
; Description: App component.
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myWorld = "Hello! You are now in Mark's world!"
}
