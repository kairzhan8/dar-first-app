import { Injectable } from '@angular/core';
import { TaskRestService } from './task-rest.service';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  constructor(private taskRestService: TaskRestService) { }

  getTasks() {
    return this.taskRestService.getTasks();
  }

  createTask(task) {
    return this.taskRestService.createTask(task);
  }

  updateTask(task) {
    return this.taskRestService.updateTask(task);
  }

  deleteTask(Task) {
    return this.taskRestService.deleteTask(Task);
  }
}
