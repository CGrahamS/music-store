import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent }   from "./app.component";
import { AlbumListComponent} from "./album-list.component";
import { ArtistPipe } from "./artist.pipe";
import { ShoppingCartComponent} from "./shopping-cart.component";
import { InCartPipe } from "./in-cart.pipe";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AlbumListComponent,
    ArtistPipe,
    ShoppingCartComponent,
    InCartPipe,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
