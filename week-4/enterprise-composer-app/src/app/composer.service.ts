/*
===============================================
; Title:  Assignment 4.4 - Async Pipe
; Author: Mark Watson
; Date: 20 June 2021
; Description: Composer service file.
;==============================================
*/

// import required modules
import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

// default injectable
@Injectable({
  providedIn: 'root'
})

// exports composer service for use
export class ComposerService {
  composers: Array<IComposer>;

  constructor() {// creates 5 Composer objects in composers array
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
  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
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

  // filters composers by matching an input
  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(map(composers =>
      composers.filter(composer =>
        composer.fullName.toLowerCase().indexOf(name) > -1)))
  }
}
