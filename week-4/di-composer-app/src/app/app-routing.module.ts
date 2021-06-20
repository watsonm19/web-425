/*
============================================
; Title:  Assignment 3.2 - Passing Data to Routes, Part I
; Author: Mark Watson
; Date: 13 June 2021
; Description: App routing file.
;===========================================
*/

// imports required modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import {ComposerDetailsComponent } from './composer-details/composer-details.component';

// routes
const routes: Routes = [
  { path: '', redirectTo: '/composer-list', pathMatch: 'full'},
  { path: 'composer-list', component: ComposerListComponent },
  { path: 'composer-details/:composerId', component: ComposerDetailsComponent},
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

// default NgModule
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// export
export class AppRoutingModule { }
