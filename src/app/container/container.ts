import { Component } from '@angular/core';
import { Nav } from '../nav/nav';
import { Header } from '../header/header';
import { NotificationBox } from '../notification-box/notification-box';
import { Products } from '../products/products';
import { CoustomerList } from '../coustomer-list/coustomer-list';

@Component({
  selector: 'app-container',
  imports: [Nav, Header, NotificationBox, Products, CoustomerList],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {}
