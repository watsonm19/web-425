/*
===============================================
; Title:  Assignment 6.4 - Input Properties
; Author: Mark Watson
; Date: 04 July 2021
; Description: GPA components.
;==============================================
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})

// GPA component class
export class GpaComponent implements OnInit {

  // accepts input of gpa total
  @Input() gpaTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
