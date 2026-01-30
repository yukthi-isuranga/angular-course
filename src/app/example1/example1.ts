import { Component } from '@angular/core';
import { UserEx } from './user-ex/user-ex';
import { UserDetails } from './user-details/user-details';

@Component({
  selector: 'app-example1',
  imports: [UserEx, UserDetails],
  templateUrl: './example1.html',
  styleUrl: './example1.css',
})
export class Example1 {}
