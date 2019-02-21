import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.type';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  host = 'https://jsonplaceholder.typicode.com/';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.host}users`);
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.host}users/${id}`);
  }
}
