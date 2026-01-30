import { Component } from '@angular/core';
import { User } from '../../../model/userexample';
import { UsersExample1 } from '../../service/users-example1';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user-ex',
  imports: [NgFor],
  templateUrl: './user-ex.html',
  styleUrl: './user-ex.css',
})
export class UserEx {
  usersChild: User[] = [];

  constructor(private userDataservice: UsersExample1) {}

  ngOnInit() {
    this.usersChild = this.userDataservice.users;
    console.log(this.usersChild);
  }

  OnclickUser(user: User) {
    this.userDataservice.ShowUserDetails(user);
  }
}
