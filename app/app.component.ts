import { Component } from "@angular/core";
import { Album } from "./album.model";

@Component({
  selector: "my-app",
  template: `
  <div class="container">
    <h1 class="header">Mrs. Music</h1>
    <div class="row">
      <div class="col-md-7">
        <div class="row">
          <album-list
            [childAlbumList] = "masterAlbumList"
            [childArtistList] = "masterArtistList"
            (addToShoppingCartSender) = "addToShoppingCart($event)"
          ></album-list>
        </div>
      </div>
      <div class="col-md-3 col-md-offset-1">
        <shopping-cart
          [childShoppingCartList] = "masterShoppingCartList"
          (removeFromShoppingCartSender) = "removeFromShoppingCart($event)"
          [childTotalPrice] = "masterTotalPrice"
          (childClearCartSender) = "masterClearCart()"
        ></shopping-cart>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  masterAlbumList: Album[] = [
    new Album("Rumours", "Fleetwood Mac", "Classic Rock", 20, 5, "rumours.png"),
    new Album("Exodus", "Bob Marley and the Wailers", "Reggae", 22, 5, "exodus.png"),
    new Album("2001", "Dr. Dre", "Space Rap", 20, 5, "2001.jpg"),
    new Album("Pinkerton: Special", "Weezer", "Papunk", 99, 5, "pinkerton.jpg"),
    new Album("Demon Days", "Gorillaz", "Pop-Hop", 19, 5, "demon-days.png"),
    new Album("Plastic Beach", "Gorillaz", "Pop-Hop", 19, 5, "plastic-beach.jpg"),
    new Album("Pet Sounds", "Beech Boyz", "Forest Punk", 20, 5, "pet-sounds.jpg"),
    new Album("Revolver", "Beatles", "Rock", 20, 5, "revolver.jpg"),
  ];
  masterArtistList: string[] = this.createArtistList();
  masterShoppingCartList: Album[] = [];
  masterTotalPrice: number = 0;
  createArtistList() {
    let artistArray: string[] = [];
    this.masterAlbumList.forEach(function(album){
      if (!artistArray.includes(album.artist)) {
        artistArray.push(album.artist);
      }
    });
    return artistArray;
  };

  addToShoppingCart(album) {
    this.masterShoppingCartList.push(album);
    this.masterTotalPrice += album.price;
    --album.stock;
  }

  removeFromShoppingCart(selectedAlbum) {
    for (let i = 0; i < this.masterShoppingCartList.length; i++) {
      if (selectedAlbum === this.masterShoppingCartList[i]) {
        this.masterShoppingCartList.splice(i, 1);
        this.masterTotalPrice -= selectedAlbum.price;
        ++selectedAlbum.stock;
      }
    }
  }

  masterClearCart() {
    let that = this;
    this.masterShoppingCartList.forEach(function(album){
      that.masterShoppingCartList = [];
      that.masterTotalPrice = 0;
    });
  }
}
