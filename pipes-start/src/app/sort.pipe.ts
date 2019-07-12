import { Pipe, PipeTransform } from '@angular/core';
import { FORMERR } from 'dns';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(values: any, propName: string) {
    return values.sort((a, b) => {
      if (a[propName] > b[propName]) {
        return 1;
      } else {
        return -1;
      }
    });
  }

}
