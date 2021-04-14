import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  shoppingList = [
    'Beer',
    'Shampo',
    'tacos!'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addItem(item: HTMLInputElement): void {
    this.shoppingList = [item.value, ... this.shoppingList];
    item.value = '';
    item.focus();
  }

}
