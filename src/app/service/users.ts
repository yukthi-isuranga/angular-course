import { Injectable } from '@angular/core';
import { Userslog } from './userslog';

@Injectable({
  providedIn: 'root',
})
export class Users {
  users: { name: string; status: string }[] = [
    { name: 'John', status: 'active' },
    { name: 'Sarah', status: 'inactive' },
    { name: 'Michael', status: 'active' },
    { name: 'Emma', status: 'pending' },
    { name: 'David', status: 'active' },
  ];

  constructor(private logger: Userslog) {}

  AddNewUser(name: string, status: string) {
    this.users.push({ name, status });
    this.logger.printLogMessage(name, status);
  }
}
