import { Component } from '@angular/core';
import { Users } from '../service/users';
import { NgClass, NgFor } from '@angular/common';
import { Adduser } from './adduser/adduser';

@Component({
  selector: 'app-usersdataservice',
  imports: [NgFor, NgClass, Adduser],
  templateUrl: './usersdataservice.html',
  styleUrl: './usersdataservice.css',
})
export class Usersdataservice {
  usersData: { name: string; status: string }[] = [];

  constructor(private userService: Users) {}

  ngOnInit() {
    this.usersData = this.userService.users;
    console.log(this.usersData);
  }
}
