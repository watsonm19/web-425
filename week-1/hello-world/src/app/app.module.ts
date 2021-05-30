/*
============================================
; Title:  Exercise 1.3 - Angular CLI
; Author: Mark Watson
; Date: 29 May 2021
; Description: App module.
;===========================================
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
