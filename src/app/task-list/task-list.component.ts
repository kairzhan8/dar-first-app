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
      console.log('getTasks', res);
      this.tasks = res;
      console.log(this.tasks.length);
    });

  }

  deleteTask(id: number) {
    // variant 1
    // this.taskRestDataService.deleteTask(id)
    // .subscribe(res => {
    //   this.tasks = this.tasks.filter(task => task.id != id);
    // });
    console.log(this.tasks.length);
    console.log(this);
    this.taskRestDataService.deleteTask(id)
    .subscribe( () => {
      console.log(this);
      this.getTasks();
    });
  }
}
