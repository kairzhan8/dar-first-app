import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityprefix'
})
export class CityprefixPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return `г. ${value}`;
  }

}
