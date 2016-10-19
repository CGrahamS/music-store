import { Component } from "@angular/core";
import { Album } from "./album.model";

@Component({
  selector: "my-app",
  template: `
  <div class="container">
    <h1>Mrs. Music</h1>
    <div class="row">
      <div class="col-md-4 col-md-offset-2">
        <album-list
          [childAlbumList] = "masterAlbumList"
          [childArtistList] = "masterArtistList"
        ></album-list>
      </div>
      <div class="col-md-4 col-md-offset-2">
        <shopping-cart
          [childAlbumList] = "masterAlbumList"
        ></shopping-cart>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  masterAlbumList: Album[] = [
    new Album("Rumours", "Fleetwood Mac", "Classic Rock", 20),
    new Album("Exodus", "Bob Marley and the Wailers", "Reggae", 22),
    new Album("2001", "Dr. Dre", "Space Rap", 20),
    new Album("Pinkerton: Special", "Weezer", "Papunk", 99),
    new Album("Demon Days", "Gorillaz", "Pop-Hop", 19),
    new Album("Plastic Beach", "Gorillaz", "Pop-Hop", 19),
    new Album("Pet Sounds", "Beech Boyz", "Forest Punk", 20),
  ];
  masterArtistList: string[] = this.createArtistList();
  createArtistList() {
    let artistArray: string[] = [];
    this.masterAlbumList.forEach(function(album){
      if (!artistArray.includes(album.artist)) {
        artistArray.push(album.artist);
      }
    });
    return artistArray;
  };
}
