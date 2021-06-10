/*
============================================
; Title:  Assignment 2.4 - Routing In Action
; Author: Mark Watson
; Date: 9 June 2021
; Description: About components.
;===========================================
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
