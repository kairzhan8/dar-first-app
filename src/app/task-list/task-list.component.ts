import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../services/task/task.type';
import { TaskDataService } from '../services/task/task-data.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];


  constructor(private taskRestDataService: TaskDataService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.taskRestDataService.getTasks()
    .subscribe(res => {
      this.tasks = res;
    });

  }

  deleteTask(tasks) {
    console.log(this.tasks);
    this.taskRestDataService.deleteTask(this.tasks)
    .subscribe();
  }



}
