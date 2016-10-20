import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Album } from "./album.model";

@Component ({
  selector: "shopping-cart",
  template: `
  <div class="shopping-cart well">
  <h3>Shopping Cart</h3>
    <h4 *ngIf="childShoppingCartList <= 0">EMPTY</h4>
    <div *ngFor="let album of childShoppingCartList">
      <h4>{{album.name}}</h4>
      <p>$ {{album.price}} </p>
      <button (click)="removeFromCart(album)" class="btn btn-danger">Remove</button>
    </div>
    <h4 *ngIf="childTotalPrice > 0">Total: $ {{childTotalPrice}}</h4>
    <button *ngIf="childTotalPrice > 0" (click)="childClearCart()" class="btn btn-success">Buy</button>
  </div>
  `
})

export class ShoppingCartComponent {
  @Input() childShoppingCartList: Album[];
  @Input() childTotalPrice: number;
  @Output() removeFromShoppingCartSender = new EventEmitter();
  @Output() childClearCartSender = new EventEmitter();
  removeFromCart(album) {
    this.removeFromShoppingCartSender.emit(album);
  }
  childClearCart() {
    this.childClearCartSender.emit();
  }
}
