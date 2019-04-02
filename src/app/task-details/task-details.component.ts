import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../services/task/task-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../services/task/task.type';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {

  id: number;
  userId: string;
  title: string;
  description: string;
  isDone: boolean;

  task = {
    userId: this.userId,
    title: this.title,
    description: this.description,
    isDone: this.isDone
  };

  constructor(private taskDataService: TaskDataService,
              private route: ActivatedRoute,
              private router: Router,
     ) {

     }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.route.data.subscribe((res) => {
      console.log(res);
  });
}



  saveTask() {
    this.id = this.route.snapshot.params.id;
    if (this.id) {
      this.taskDataService.updateTask(this.userId, this.task)
        .subscribe((res: Task) => {
        console.log(this.task);
        this.router.navigateByUrl('/tasks');
      });
    } else {
      this.taskDataService.createTask(this.task)
        .subscribe((res: Task) => {
          this.router.navigateByUrl('/tasks');
      });
    }
  }

  }





