import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Album } from "./album.model";

@Component ({
  selector: "shopping-cart",
  template: `
  <div class="shopping-cart">
  <button (click)="consoleLog()" class="btn btn-danger">Child Log</button>
  <h3>Shopping Cart</h3>
    <h4 *ngIf="childShoppingCartEmpty">EMPTY</h4>
    <div *ngFor="let album of childAlbumList | incart">
      <h4>{{album.name}}</h4>
      <p>$ {{album.price}} </p>
      <button (click)="removeFromCart(album)" class="btn btn-danger">Remove</button>
    </div>
  </div>
  `
})

export class ShoppingCartComponent {
  @Input() childAlbumList: Album[];
  @Input() childShoppingCartEmpty: boolean;
  @Output() shoppingCartCheckSender = new EventEmitter();
  removeFromCart(album) {
    album.inCart = false;
    this.shoppingCartCheckSender.emit();
  }

  consoleLog = function() {
    console.log("child " + this.childShoppingCartEmpty);
  };
}
