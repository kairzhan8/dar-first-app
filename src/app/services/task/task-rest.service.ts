import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Task } from './task.type';


@Injectable({
  providedIn: 'root'
})
export class TaskRestService {

  host = 'http://expo.iict.kz/api';


  constructor(private httpClient: HttpClient) { }

  getTasks(filter: any): Observable<Task[]> {
    return this.httpClient.get<Task[]>(`${this.host}/tasks`, {params: {filter: JSON.stringify(filter)}});
  }

  createTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(`${this.host}/tasks`, task);
  }

  updateTask(userId: string, task: Task): Observable<Task> {
    return this.httpClient.put<Task>(`${this.host}/tasks/${task.id}`, task);
  }

  deleteTask(id: number): Observable<Task> {
    return this.httpClient.delete<Task>(`${this.host}/tasks/${id}`);
  }

  getTask(id: number): Observable<Task> {
    return this.httpClient.get<Task>(`${this.host}/tasks/${id}`);
  }
}
