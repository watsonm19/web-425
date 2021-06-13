/*
===============================================
; Title:  Assignment 3.3 - Passing Data to Routes, Part 2
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

  assignment: string = 'Secure Profile App';
}
