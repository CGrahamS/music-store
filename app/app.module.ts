import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent }   from "./app.component";
import { AlbumListComponent} from "./album-list.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    AlbumListComponent 
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
