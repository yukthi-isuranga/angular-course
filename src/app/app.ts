import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Container } from './container/container';
import { FormsModule } from '@angular/forms';
import { HooksDemo } from './hooks-demo/hooks-demo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Container, FormsModule, HooksDemo],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('xxx');
  protected readonly discription = signal(
    'this is my first project using angular. and i becoming an expert on this',
  );
}
