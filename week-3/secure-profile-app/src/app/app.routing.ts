/*
===============================================
; Title:  Assignment 3.3 - Passing Data to Routes, Part 2
; Author: Mark Watson
; Date: 13 June 2021
; Description: App routing file.
;==============================================
*/

import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';

export const AppRoutes: Routes = [
  {path: '', component: SignInComponent},
  {path: 'home', component: HomeComponent}
];

