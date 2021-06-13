/*
===============================================
; Title:  Assignment 3.3 - Passing Data to Routes, Part 2
; Author: Mark Watson
; Date: 13 June 2021
; Description: Home components.
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private route: ActivatedRoute) {
    // assigns value being passed from sign-in component
    this.isLoggedIn = Boolean(this.route.snapshot.queryParamMap.get('isLoggedIn'));
  }

  ngOnInit(): void {
  }

}
