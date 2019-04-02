import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Task } from '../task/task.type';
import { Observable } from 'rxjs';
import { TaskDataService } from '../task/task-data.service';

@Injectable({
  providedIn: 'root'
})
export class TaskResolverService implements Resolve<Task> {

  constructor(
    private taskDataService: TaskDataService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Task> {
    const id = route.params.id;
    console.log(id);
    return this.taskDataService.getTask(id);
  }
}
