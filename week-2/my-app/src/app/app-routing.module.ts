/*
============================================
; Title:  Exercise 2.2 - Navigation
; Author: Mark Watson
; Date: 6 June 2021
; Description: App routing for my-app.
;===========================================
*/

// imports required modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component'
import { AboutComponent } from './about/about.component'

// routing paths
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

// NgModule
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// export file
export class AppRoutingModule { }
