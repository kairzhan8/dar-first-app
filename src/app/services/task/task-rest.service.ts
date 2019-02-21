import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Task } from './task.type';


@Injectable({
  providedIn: 'root'
})
export class TaskRestService {

 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

  host = 'http://expo.iict.kz/api/';


  constructor(private httpClient: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(`${this.host}tasks`);
  }

  createTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(`${this.host}task?filter{"where":{"userId":""}}`, task, this.httpOptions);
  }

  updateTask(task: Task): Observable<Task> {
    return this.httpClient.put<Task>(`${this.host}task/:id`, task, this.httpOptions);
  }

  deleteTask(id: number): Observable<Task> {
    return this.httpClient.delete<Task>(`${this.host}task/:id`);
  }
}
