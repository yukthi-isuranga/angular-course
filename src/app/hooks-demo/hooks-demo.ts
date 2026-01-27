import { Component } from '@angular/core';
import { HooksDemo2 } from '../hooks-demo2/hooks-demo2';
import { NgIf } from '@angular/common';
import { Highlight } from '../CustomDirective/highlight';
import { Heighlight2 } from '../CustomDirective/heighlight2';

@Component({
  selector: 'app-hooks-demo',
  imports: [HooksDemo2, NgIf, Highlight, Heighlight2],
  templateUrl: './hooks-demo.html',
  styleUrl: './hooks-demo.css',
})
export class HooksDemo {
  inputValue?: string;

  destroy: boolean = true;

  onchange(data: HTMLInputElement) {
    // console.log(data.value);
    this.inputValue = data.value;
  }

  DistroyComponent() {
    this.destroy = !this.destroy;
  }
}
