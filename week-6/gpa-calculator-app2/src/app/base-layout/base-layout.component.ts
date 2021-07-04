/*
===============================================
; Title:  Assignment 6.4 - Input Properties
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
    this.assignment = 'Assignment 6.4 - Input Properties';
  }

  ngOnInit(): void {
  }

}
