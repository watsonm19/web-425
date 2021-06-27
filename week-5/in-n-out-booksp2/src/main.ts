/*
===============================================
; Title:  Exercise 5.2 - Navigation and Layout
; Author: Mark Watson
; Date: 27 June 2021
; Description: Main TypeScript file.
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
