/*
============================================
; Title:  Assignment 2.4 - Routing In Action
; Author: Mark Watson
; Date: 6 June 2021
; Description: 'composer-list' components.
;===========================================
*/

import { Component, OnInit } from '@angular/core';

// export Person class for use
export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

// default component
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

// exports component for use
export class ComposerListComponent implements OnInit {

  // sets composers to an Array / Composer data type
  composers: Array<Composer>;

  constructor() {
    // creates 5 Composer objects in composers array
    this.composers = [
      new Composer("Wolfgang Amadeus Mozart", "Classical"),
      new Composer("Ludwig van Beethoven", "Classical"),
      new Composer("Johann Sebastian Bach", "Classical"),
      new Composer("Johannes Brahms", "Classical"),
      new Composer("Joseph Haydn", "Classical")
    ]
  }

  ngOnInit(): void {
  }

}
