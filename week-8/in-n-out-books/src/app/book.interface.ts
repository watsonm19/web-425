/*
===============================================
; Title:  Exercise 6.2 - Input/Output Properties, Part 1
; Author: Mark Watson
; Date: 03 July 2021
; Description: Book interface file.
;==============================================
*/

// IBook interface
export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
