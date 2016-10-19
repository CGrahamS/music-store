import { Component, Input } from "@angular/core";
import { Album } from "./album.model";

@Component ({
  selector: "shopping-cart",
  template: `
  <div *ngFor="let album of childAlbumList | incart">
    <h3>{{album.name}}</h3>
    <p>$ {{album.price}} </p>
    <button (click)="removeFromCart(album)">Remove</button>
  </div>
  `
})

export class ShoppingCartComponent {
  @Input() childAlbumList: Album[];
  removeFromCart(album) {
    album.inCart = false;
  }
}
