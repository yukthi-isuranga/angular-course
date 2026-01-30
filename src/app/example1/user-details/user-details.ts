import { Component } from '@angular/core';
import { UsersExample1 } from '../../service/users-example1';
import { User } from '../../../model/userexample';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user-details',
  imports: [NgIf],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails {
  constructor(private userService: UsersExample1) {}

  user?: User;

  ngOnInit() {
    this.userService.OnShowDetailsClicked.subscribe((data: User) => {
      this.user = data;
    });
  }
}
