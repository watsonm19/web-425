/*
===============================================
; Title:  Exercise 4.2 - Inversion Control and Dependency Injection
; Author: Mark Watson
; Date: 20 June 2021
; Description: Composer service spec.
;==============================================
*/

import { TestBed } from '@angular/core/testing';

import { ComposerService } from './composer.service';

describe('ComposerService', () => {
  let service: ComposerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
