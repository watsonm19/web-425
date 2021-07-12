/*
===============================================
; Title:  Exercise 7.2 - Reactive Forms
; Author: Mark Watson
; Date: 11 July 2021
; Description: Sign-in service file.
;==============================================
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number>;

  constructor() {
    this.studentIds = [1008, 1009, 1010, 1011, 1012];
  }

  // validates user
  validate(studentId: number) {
    return this.studentIds.some(id => id === studentId);
  }
}
