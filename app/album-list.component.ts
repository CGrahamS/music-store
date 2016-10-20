import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Album } from "./album.model";

@Component ({
  selector: "album-list",
  template: `
  <select (change) = "onArtistChange($event.target.value)" class="form-control" id ="artist-selector">
    <option selected disabled>Artist</option>
    <option value="All">All</option>
    <option *ngFor="let artist of childArtistList"
    [value]="artist"
    >{{ artist }}
    </option>
  </select>
  <div *ngFor="let album of childAlbumList | artist:desiredArtist" class="well col-md-4 album">
    <img src="resources/images/{{album.img}}" class="album-covers">
    <h3>{{album.name}}</h3>
    <h4>Artist: {{album.artist}}</h4>
    <p>Genre: <em>{{album.genre}}</em></p>
    <p *ngIf="album.stock > 0">In Stock: {{album.stock}} </p>
    <p *ngIf="album.stock <= 0">OUT OF STOCK </p>
    <p>{{album.price| currency:'USD':true:'1.2-2'}} </p>
    <button *ngIf="album.stock > 0" (click)="addToCart(album)" class="btn btn-success">Add to Cart</button>
  </div>
  `
})

export class AlbumListComponent {
  public desiredArtist = "All";
  @Input() childArtistList: string[];
  @Input() childAlbumList: Album[];
  @Output() addToShoppingCartSender = new EventEmitter();
  onArtistChange(selectedArtist) {
    this.desiredArtist = selectedArtist;
  }
  addToCart(album) {
    this.addToShoppingCartSender.emit(album);
  }
}
