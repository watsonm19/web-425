/*
============================================
; Title:  Assignment 2.4 - Routing In Action
; Author: Mark Watson
; Date: 6 June 2021
; Description: My details spec.
;===========================================
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDetailsComponent } from './my-details.component';

describe('MyDetailsComponent', () => {
  let component: MyDetailsComponent;
  let fixture: ComponentFixture<MyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
