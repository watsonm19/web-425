/*
===============================================
; Title:  Exercise 5.2 - Navigation and Layout
; Author: Mark Watson
; Date: 27 June 2021
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
