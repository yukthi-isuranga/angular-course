import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../../model/userexample';

@Injectable({
  providedIn: 'root',
})
export class UsersExample1 {
  users: User[] = [
    {
      name: 'John Carter',
      job: 'Software Engineer',
      gender: 'Male',
      country: 'USA',
      age: 28,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Emma Williams',
      job: 'UI/UX Designer',
      gender: 'Female',
      country: 'UK',
      age: 26,
      avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    },
    {
      name: 'Michael Brown',
      job: 'Product Manager',
      gender: 'Male',
      country: 'Canada',
      age: 35,
      avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
    },
    {
      name: 'Sophia Martinez',
      job: 'QA Engineer',
      gender: 'Female',
      country: 'Spain',
      age: 30,
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
    {
      name: 'David Kim',
      job: 'DevOps Engineer',
      gender: 'Male',
      country: 'South Korea',
      age: 33,
      avatar: 'https://randomuser.me/api/portraits/men/15.jpg',
    },
  ];

  OnShowDetailsClicked = new EventEmitter<User>();

  ShowUserDetails(user: User) {
    this.OnShowDetailsClicked.emit(user);
  }
}
