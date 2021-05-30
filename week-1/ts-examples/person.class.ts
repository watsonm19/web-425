/*
===============================================
; Title:  Assignment 1.4 - TypeScript
; Author: Mark Watson
; Date: 29 May 2021
; Description: Creates a Person object from a class implementing IPerson. 
;     Outputs values from new Person object in a string.
;==============================================
*/

// imports the interface
import { IPerson } from "./person.interface";

// creates a Person class implementing IPerson interface
class Person implements IPerson {
    firstName: string;
    lastName: string;

    // constructor that accepts two arguments - first name & last name
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// creates a new Person object
let myName = new Person("Mark", "Watson");

// outputs string with values from the new Person object
console.log(`My name is ${myName.firstName} ${myName.lastName}`)