/*
===============================================
; Title:  Exercise 6.2 - Input/Output Properties, Part 1
; Author: Mark Watson
; Date: 03 July 2021
; Description: Wishlist components file.
;==============================================
*/

import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  // items list
  items: Array<IWishlistItem> = [];

  constructor() {}

  ngOnInit(): void {}

  // push items to wishlist
  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item);
  }
}
