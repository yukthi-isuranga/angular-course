import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Container } from './container/container';
import { FormsModule } from '@angular/forms';
import { HooksDemo } from './hooks-demo/hooks-demo';
import { Mostlike } from './mostlike/mostlike';
import { Custappstyle } from './custappstyle/custappstyle';
import { Usersdataservice } from './usersdataservice/usersdataservice';
import { Example1 } from './example1/example1';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Container,
    FormsModule,
    HooksDemo,
    Mostlike,
    Custappstyle,
    Usersdataservice,
    Example1,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('xxx');
  protected readonly discription = signal(
    'this is my first project using angular. and i becoming an expert on this',
  );
}
