/*
============================================
; Title:  Assignment 2.3 - Data Binding
; Author: Mark Watson
; Date: 6 June 2021
; Description: 'my details' components.
;===========================================
*/

// imports required modules
import { Component, OnInit } from '@angular/core';

// export Person class for use
export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", "#2021", "#CodingWithAngular", "#ngLasVegas"
  ];

  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }

  toString() {
    console.log(`\n  Full name: ${this.fullName}\n  Favorite food: ${this.favoriteFood}\n  Favorite color: ${this.favoriteColor}`)
  }
}

// default component
@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})

// exports MyDetailsComponent
export class MyDetailsComponent implements OnInit {

  // sets myProfile to Person data type
  myProfile: Person;

  constructor() {
    // creates new Person and assigns to myProfile
    this.myProfile = new Person("Mark Watson", "Steak", "Blue");
    // converts myProfile to string
    this.myProfile.toString()
  }

  ngOnInit(): void {
  }

}
