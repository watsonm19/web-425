/*
===============================================
; Title:  Assignment 4.4 - Async Pipe
; Author: Mark Watson
; Date: 20 June 2021
; Description: Composer list components.
;==============================================
*/

// imports required modules
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';

// default component
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

// exports component for use
export class ComposerListComponent implements OnInit {

  composers: Observable<IComposer[]>;
  txtSearchControl = new FormControl('');

  constructor(private composerService: ComposerService) {
    // dependency injection
    this.composers = this.composerService.getComposers();

    // listens for value change event - 500ms delay
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));
  }

  ngOnInit(): void {
  }

  // filters composers
  filterComposers(name: string) {
    this.composers = this.composerService.filterComposers(name);
  }
}
