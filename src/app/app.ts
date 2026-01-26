import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Container } from './container/container';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Container, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('xxx');
  protected readonly discription = signal(
    'this is my first project using angular. and i becoming an expert on this',
  );
}
