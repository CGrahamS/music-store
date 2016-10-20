import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Album } from "./album.model";

@Component ({
  selector: "album-list",
  template: `
  <select (change) = "onArtistChange($event.target.value)" class="form-control">
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
    <button (click)="addToCart(album)" class="btn btn-success">Add to Cart</button>
  </div>
  `
})

export class AlbumListComponent {
  public desiredArtist = "All";
  @Input() childArtistList: string[];
  @Input() childAlbumList: Album[];
  @Output() shoppingCartCheckSender = new EventEmitter();
  onArtistChange(selectedArtist) {
    this.desiredArtist = selectedArtist;
  }
  addToCart(album) {
    album.inCart = true;
    this.shoppingCartCheckSender.emit();
  }
}
