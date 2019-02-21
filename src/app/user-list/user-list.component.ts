import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { User } from '../services/user/user.type';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[];
  selectedUser: User;


  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  getUsers() {
    this.userService.getUsers()
    .subscribe(res => {
      this.users = res;
    });
  }

  getUserById(id: number) {
    this.selectedUser = this.users[id - 1];
  }
}
