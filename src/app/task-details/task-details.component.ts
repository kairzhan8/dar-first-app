import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../services/task/task-data.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {

  userId: string;
  title: string;
  description: string;
  isChecked: false;

  constructor(private taskDataService: TaskDataService) { }

  ngOnInit() {
  }

  // createTask(task) {
  //   this.taskDataService.createTask(task)
  //   .subscribe(task => this.;
  // }

  // updateTask(task) {
  //   this.taskDataService.updateTask(task)
  //   .subscribe(task => this.tasks.push(task));
  // }




}
