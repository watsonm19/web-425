/*
===============================================
; Title:  Exercise 6.2 - Input/Output Properties, Part 1
; Author: Mark Watson
; Date: 03 July 2021
; Description: component file for creating wishlist.
;==============================================
*/

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.css']
})
export class WishlistCreateComponent implements OnInit {

  // output property
  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();

  // create item
  item: IWishlistItem;

  constructor() {
    // item as IWishlistItem object
    this.item = {} as IWishlistItem;
  }

  ngOnInit(): void {
  }

  // outputs item
  addItem() {
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors
    })

    this.item = {} as IWishlistItem;
  }
}
