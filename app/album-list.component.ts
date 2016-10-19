import { Component, Input } from "@angular/core";
import { Album } from "./album.model";

@Component ({
  selector: "album-list",
  template: `
  <select (change) = "onArtistChange($event.target.value)">
    <option selected disabled>Artist</option>
    <option value="All">All</option>
    <option *ngFor="let artist of childArtistList"
    [value]="artist"
    >{{ artist }}
    </option>
  </select>
  <div *ngFor="let album of childAlbumList | artist:desiredArtist">
    <h3>{{album.name}}</h3>
    <h4>Artist: {{album.artist}}</h4>
    <p>Genre: <em>{{album.genre}}</em></p>
    <p>$ {{album.price}} </p>
  </div>
  `
})

export class AlbumListComponent {
  public desiredArtist = "All";
  @Input() childArtistList: string[];
  @Input() childAlbumList: Album[];
  onArtistChange(selectedArtist) {
    this.desiredArtist = selectedArtist;
  }
}
