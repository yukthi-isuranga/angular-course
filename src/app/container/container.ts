import { Component } from '@angular/core';
import { Nav } from '../nav/nav';
import { Header } from '../header/header';
import { NotificationBox } from '../notification-box/notification-box';
import { Products } from '../products/products';
import { CoustomerList } from '../coustomer-list/coustomer-list';
import { ViewChildExample } from '../view-child-example/view-child-example';

@Component({
  selector: 'app-container',
  imports: [Nav, Header, NotificationBox, Products, CoustomerList, ViewChildExample],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {}
