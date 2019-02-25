import { Injectable } from '@angular/core';
import { TaskRestService } from './task-rest.service';
import { Task } from './task.type';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  constructor(private taskRestService: TaskRestService) { }

  getTasks() {
    return this.taskRestService.getTasks();
  }

  createTask(task: Task) {
    return this.taskRestService.createTask(task);
  }

  updateTask(userId: string, task: Task) {
    return this.taskRestService.updateTask(userId, task);
  }

  deleteTask(id: number) {
    return this.taskRestService.deleteTask(id);
  }

  getTask(id: number) {
    return this.taskRestService.getTask(id);
  }
}
