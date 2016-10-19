import { Pipe, PipeTransform } from "@angular/core";
import { Album } from "./album.model";

@Pipe ({
  name: "artist",
  pure: false
})

export class ArtistPipe implements PipeTransform {
  transform(input: Album[], desiredArtist) {
    let output: Album[] = [];

    if (desiredArtist !== "All") {
      input.forEach(function(album) {
        if (album.artist === desiredArtist) {
          output.push(album);
        }
      });
      return output;
    } else {
      return input;
    }
  }
}
