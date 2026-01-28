import { Component } from '@angular/core';
import { Style } from '../CustomDirective/style';

@Component({
  selector: 'app-custappstyle',
  imports: [Style],
  templateUrl: './custappstyle.html',
  styleUrl: './custappstyle.css',
})
export class Custappstyle {}
