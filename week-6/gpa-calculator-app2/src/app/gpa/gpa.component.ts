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
export class GpaComponent implements OnInit {

  @Input() gpaTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
