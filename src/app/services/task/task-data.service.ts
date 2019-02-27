import { Injectable } from '@angular/core';
import { TaskRestService } from './task-rest.service';
import { Task } from './task.type';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  constructor(private taskRestService: TaskRestService) { }

  getTasks() {
    const filter = {
      where: { userId: 'Kairzhan'}
    };
    return this.taskRestService.getTasks(filter);
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
