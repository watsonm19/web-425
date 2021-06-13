/*
===============================================
; Title:  Assignment 3.2 - Passing Data to Routes, Part I
; Author: Mark Watson
; Date: 13 June 2021
; Description: Composer class file.
;==============================================
*/

import { IComposer } from './composer.interface';

// export Composer class for use
export class Composer {
  composers: Array<IComposer>;

  constructor() {
    // creates 5 Composer objects in composers array
    this.composers = [
      {
        composerId: 100, fullName: "Wolfgang Amadeus Mozart", genre: "Classical"
      },
      {
        composerId: 101, fullName: "Ludwig van Beethoven", genre: "Classical"
      },
      {
        composerId: 102, fullName: "Johann Sebastian Bach", genre: "Classical"
      },
      {
        composerId: 103, fullName: "Johannes Brahms", genre: "Classical"
      },
      {
        composerId: 104, fullName: "Joseph Haydn", genre: "Classical"
      }
    ]
  }

  // gets all composers
  getComposers() {
    return this.composers;
  }

  // gets one composer with matching ID
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    return {} as IComposer;
  }
}
