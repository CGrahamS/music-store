import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Album } from "./album.model";

@Component ({
  selector: "shopping-cart",
  template: `
  <div class="shopping-cart">
  <button (click)="consoleLog()" class="btn btn-danger">Child Log</button>
  <h3>Shopping Cart</h3>
    <h4 *ngIf="childShoppingCartList < 0">EMPTY</h4>
    <div *ngFor="let album of childShoppingCartList">
      <h4>{{album.name}}</h4>
      <p>$ {{album.price}} </p>
      <button (click)="removeFromCart(album)" class="btn btn-danger">Remove</button>
    </div>
  </div>
  `
})

export class ShoppingCartComponent {
  @Input() childShoppingCartList: Album[];
  @Output() removeFromShoppingCartSender = new EventEmitter();
  removeFromCart(album) {
    this.removeFromShoppingCartSender.emit(album);
  }
  consoleLog = function() {
    console.log("child " + this.childShoppingCartEmpty);
  };
}
