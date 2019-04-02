import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskState'
})
export class TaskStatePipe implements PipeTransform {

  transform(value: string, isDone: boolean): any {
    let state: string;
    if (isDone) {
      state = '✔';
    } else {
      state = '✖';
    }
    return `${state}`;
  }

}
