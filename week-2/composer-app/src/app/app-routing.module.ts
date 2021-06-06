/*
============================================
; Title:  Assignment 2.4 - Routing In Action
; Author: Mark Watson
; Date: 6 June 2021
; Description: App routing.
;===========================================
*/

// imports required modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component'
import { AboutComponent } from './about/about.component'

// routes
const routes: Routes = [
  { path: 'composer-list', component: ComposerListComponent },
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
