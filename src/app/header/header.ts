import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  slogan: string = 'Your one stop shop for everything.';

  slogan2() {
    return 100 - 50 + 60;
  }

  sourse: string = 'favicon.ico';
}
