/*
===============================================
; Title:  Assignment 3.4 - Guarding Routes
; Author: Mark Watson
; Date: 13 June 2021
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

  assignment: string = 'Enhanced Secure Profile App';
}
