import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityprefix'
})
export class CityprefixPipe implements PipeTransform {

  transform(value: string, type: string): any {
    let prefix: string;
    switch (type) {
      case 'city':
        prefix = 'г.';
        break;
      case 'village':
        prefix = 'c.';
        break;
    }
    return `${prefix} ${value}`;
  }

}
