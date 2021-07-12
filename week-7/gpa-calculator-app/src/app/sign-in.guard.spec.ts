/*
===============================================
; Title:  Exercise 7.2 - Reactive Forms
; Author: Mark Watson
; Date: 11 July 2021
; Description: Sign-in guard specs.
;==============================================
*/

import { TestBed } from '@angular/core/testing';

import { SignInGuard } from './sign-in.guard';

describe('SignInGuard', () => {
  let guard: SignInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SignInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
