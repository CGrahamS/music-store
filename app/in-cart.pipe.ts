import { Pipe, PipeTransform } from "@angular/core";
import { Album } from "./album.model";

@Pipe ({
  name: "incart",
  pure: false
})

export class InCartPipe {
  transform(input: Album[]) {
    let output: Album[] = [];
    input.forEach(function(album){
      if (album.inCart = true) {
        output.push(album);
      }
    });
    return output;
  }
}
