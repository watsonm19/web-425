/*
===============================================
; Title:  Assignment 3.2 - Passing Data to Routes, Part I
; Author: Mark Watson
; Date: 13 June 2021
; Description: About component.
;==============================================
*/

// imports required modules
import { Component, OnInit } from '@angular/core';

// default component
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

// exports default class
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
