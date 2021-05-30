/*
============================================
; Title:  Assignment 1.5 - Components
; Author: Mark Watson
; Date: 29 May 2021
; Description: App components.
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = 'Assignment 1.5 - Components';
}
