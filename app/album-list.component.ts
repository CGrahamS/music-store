import { Component, Input } from "@angular/core";
import { Album } from "./album.model";

@Component ({
  selector: "album-list",
  template: `
  <div *ngFor="let album of childAlbumList">
    <h3>{{album.name}}</h3>
    <h4>{{album.artist}}</h4>
    <p><em>{{album.genre}}</em></p>
    <p>{{album.price}}</p>
  </div>
  `
})

export class AlbumListComponent {
  @Input() childAlbumList: Album[];
}
