/*
===============================================
; Title:  Exercise 5.3 - Data Tables
; Author: Mark Watson
; Date: 27 June 2021
; Description: Books service file.
;==============================================
*/

import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BooksService {

  books: Array<IBook>;

  constructor() {
    // sample data
    this.books = [
      {
        isbn: '9701577841235659',
        title: "Why Zebras Don't Get Ulcers",
        description: 'The Acclaimed Guide to Stress, Stress-Related Diseases, and Coping.',
        numOfPages: 539,
        authors: [
          'Robert M. Sapolsky'
        ]
      },
      {
        isbn: '9721375844565773',
        title: "Angular Development with TypeScript",
        description: 'Teaches you how to build web applications with Angular and TypeScript.',
        numOfPages: 531,
        authors: [
          'Yakov Fain',
          'Anton Moiseev'
        ]
      },
      {
        isbn: '9723240447895909',
        title: "Epi-Paleo Rx",
        description: 'The Prescription for Disease Reversal and Optimal Health.',
        numOfPages: 254,
        authors: [
          'Dr. Jack Kruse'
        ]
      },
      {
        isbn: '9711680807777503',
        title: "The DevOps Handbook",
        description: 'How to create world-class agility, reliable, & security in technology organizations.',
        numOfPages: 437,
        authors: [
          'Gene Kim',
          'Jez Humble',
          'Patrick Debois',
          'John Willis'
        ]
      },
      {
        isbn: '9720186741195112',
        title: "Head First JavaScript Programming",
        description: "A learner's guide to JavaScript Programmimg.",
        numOfPages: 661,
        authors: [
          'Eric Freeman',
          'Elisabeth Robson'
        ]
      }
    ]
  }

  // gets all books
  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  // gets one book matching isbn
  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    return {} as IBook;
  }

}
