import { Component } from "@angular/core";
import { Album } from "./album.model";

@Component({
  selector: "my-app",
  template: `
  <div class="container">
    <h1>Mrs. Music</h1>
    <album-list
      [childAlbumList] = "masterAlbumList"
    ></album-list>
  </div>
  `
})

export class AppComponent {
  masterAlbumList: Album[] = [
    new Album("Rumours", "Fleetwood Mac", "Classic Rock", 20),
  ];
}
