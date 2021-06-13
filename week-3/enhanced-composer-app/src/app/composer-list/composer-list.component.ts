/*
===============================================
; Title:  Assignment 3.2 - Passing Data to Routes, Part I
; Author: Mark Watson
; Date: 13 June 2021
; Description: Composer list components; displays a list of composers.
;==============================================
*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';

// default component
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

// exports component for use
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;

  constructor() {
    this.composers = new Composer().getComposers();
  }

  ngOnInit(): void {
  }

}
