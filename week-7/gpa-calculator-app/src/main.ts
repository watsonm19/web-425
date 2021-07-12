/*
===============================================
; Title:  Exercise 6.3 - Layouts
; Author: Mark Watson
; Date: 04 July 2021
; Description: Default main file.
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
