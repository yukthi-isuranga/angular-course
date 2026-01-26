import { Component, ElementRef, ViewChild } from '@angular/core';
import { Demo } from '../demo/demo';

@Component({
  selector: 'app-view-child-example',
  imports: [Demo],
  templateUrl: './view-child-example.html',
  styleUrl: './view-child-example.css',
})
export class ViewChildExample {
  @ViewChild('dobInput') dobEliment?: ElementRef;
  @ViewChild('ageInput') ageElement?: ElementRef;

  @ViewChild(Demo, { static: true }) demoComponent?: Demo;

  calculateAge() {
    const birthyear = new Date(this.dobEliment?.nativeElement.value).getFullYear();
    const currentyear = new Date().getFullYear();
    const currentAge = currentyear - birthyear;

    this.ageElement!.nativeElement.value = currentAge;
    // console.log(this.dobEliment);
  }
}
