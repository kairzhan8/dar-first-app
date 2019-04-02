import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskResolverService } from './services/taskResolve/task-resolver.service';

const routes: Routes = [
  {path: 'users', component: UserListComponent},
  {path: 'user/:id', component: UserDetailComponent},
  {path: 'tasks', component: TaskListComponent},
  {path: 'task', component: TaskDetailsComponent},
  {path: 'task/:id', component: TaskDetailsComponent, resolve: {
    task: TaskResolverService
  }},
  {path: '', pathMatch: 'full', redirectTo: 'users'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
