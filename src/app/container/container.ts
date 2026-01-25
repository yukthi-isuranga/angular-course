import { Component } from '@angular/core';
import { Nav } from '../nav/nav';
import { Header } from '../header/header';
import { NotificationBox } from '../notification-box/notification-box';
import { Products } from '../products/products';

@Component({
  selector: 'app-container',
  imports: [Nav, Header, NotificationBox, Products],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {}
