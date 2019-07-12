import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any) {

    if (value === null || value === "") {
      return value;
    }
    let stringRev = "";
    for (let i = 0; i < value.length; i++) {
      stringRev = value[i] + stringRev;
    }
    return stringRev;
  }

}
