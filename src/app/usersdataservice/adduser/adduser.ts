import { Component } from '@angular/core';
import { Users } from '../../service/users';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  imports: [FormsModule],
  templateUrl: './adduser.html',
  styleUrl: './adduser.css',
})
export class Adduser {
  name: string = '';
  status: string = '';
  constructor(private userService: Users) {}

  addNewUserToservice() {
    this.userService.AddNewUser(this.name, this.status);
  }
}
