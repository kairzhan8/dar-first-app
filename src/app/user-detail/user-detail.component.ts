import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { User } from '../services/user/user.type';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  @Input() users: User[];
  @Input() seletctedUser: User;


  constructor(private userService: UserService, private route: ActivatedRoute) { }


  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   console.log(params);
    //   this.users.forEach((p: User) => {
    //     if (p.id == params.id) {
    //       this.user = p;
    //     }
    //   })

    // });
  }


}
