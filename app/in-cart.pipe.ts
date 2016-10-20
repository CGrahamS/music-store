import { Pipe, PipeTransform } from "@angular/core";
import { Album } from "./album.model";

@Pipe ({
  name: "incart",
  pure: false
})

export class InCartPipe {
  transform(input: Album[], shoppingCartEmpty) {
    let output: Album[] = [];

    input.forEach(function(album){
      if (album.inCart === true) {
        output.push(album);
      }
    });
    if (output.length > 0) {
      shoppingCartEmpty = false;
    } else {
      return output;
    }
    return output;
  }
}
