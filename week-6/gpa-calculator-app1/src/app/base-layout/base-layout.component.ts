/*
===============================================
; Title:  Exercise 6.3 - Layouts
; Author: Mark Watson
; Date: 04 July 2021
; Description: Base layout components.
;==============================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor() {
    // assignment title
    this.assignment = 'Exercise 6.3 - Layouts';
  }

  ngOnInit(): void {
  }

}
