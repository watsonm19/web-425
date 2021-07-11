/*
===============================================
; Title:  Assignment 6.4 - Input Properties
; Author: Mark Watson
; Date: 04 July 2021
; Description: Grade summary components.
;==============================================
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})

// Grade Summary Component class
export class GradeSummaryComponent implements OnInit {

  // accepts inputs of grade and course
  @Input() grade: string;
  @Input() course: string;

  constructor() { }

  ngOnInit(): void {
  }

}
