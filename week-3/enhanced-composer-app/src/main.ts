/*
===============================================
; Title:  Assignment 3.2 - Passing Data to Routes, Part I
; Author: Mark Watson
; Date: 13 June 2021
; Description: Default main typescript file.
;==============================================
*/

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
