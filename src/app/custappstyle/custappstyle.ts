import { Component, Input } from '@angular/core';
import { Style } from '../CustomDirective/style';
import { FormsModule } from '@angular/forms';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-custappstyle',
  imports: [Style, FormsModule, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './custappstyle.html',
  styleUrl: './custappstyle.css',
})
export class Custappstyle {
  userSelectValue: string = '';
}
