import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Userslog {
  printLogMessage(name: string, status: string) {
    console.log('you are add new user as ' + name + ' and Statues is :' + status);
  }
}
