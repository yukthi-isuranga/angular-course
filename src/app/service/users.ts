import { Injectable } from '@angular/core';

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

  AddNewUser(name: string, status: string) {
    this.users.push({ name, status });
  }
}
