import { Injectable } from '@angular/core';
import { Task } from './task.type';
import { of, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskRestMockService {

  constructor() { }

  tasks = [
    {id: '1', title: 'Fac', description: 'Factorial is done', isDone: true},
    {id: '2', title: 'Fac2', description: 'Factorial2 is done', isDone: false},
    {id: '3', title: 'Fac3', description: 'Factorial3 is done', isDone: true},
    {id: '4', title: 'Fac4', description: 'Factorial4 is done', isDone: true},
    {id: '5', title: 'Fac5', description: 'Factorial5 is done', isDone: false}
  ];

  // getTasks(): Observable<Task[]> {
  //   return of(this.tasks);
  // }
}
