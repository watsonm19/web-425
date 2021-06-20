/*
===============================================
; Title:  Exercise 4.3 - Handling Events with Observables
; Author: Mark Watson
; Date: 20 June 2021
; Description: App components.
;==============================================
*/

// i,ports required modules
import { Component } from '@angular/core';

// default Component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// main app component
export class AppComponent {
  assignment: string = 'Exercise 4.3 - Handling Events with Observables';
}
