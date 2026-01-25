import { Component } from '@angular/core';
import { Nav } from '../nav/nav';
import { Header } from '../header/header';
import { Search } from '../search/search';
import { NotificationBox } from '../notification-box/notification-box';
import { Products } from '../products/products';
import { Filter } from '../filter/filter';

@Component({
  selector: 'app-container',
  imports: [Nav, Header, Search, NotificationBox, Products, Filter],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {}
