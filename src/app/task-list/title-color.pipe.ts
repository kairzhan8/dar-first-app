import { Pipe, PipeTransform } from '@angular/core';
import { HtmlParser } from '@angular/compiler';

@Pipe({
  name: 'titleColor'
})
export class TitleColorPipe implements PipeTransform {

  transform(value: string, isDone: boolean): any {
    // if (isDone) {
    //   color = '<span style="color:green">' + value + '</span>';
    // } else {
    //   color = '<span style="color:red">' + value + '</span>';
    // }
    return `${value}`;
  }



}
