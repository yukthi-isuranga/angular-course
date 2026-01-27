import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {
  private element?: ElementRef;
  constructor(element: ElementRef) {
    // element.nativeElement.style.backgroundColor = '#c8e6c9';
    this.element = element;
  }

  ngOnInit() {
    this.element!.nativeElement.style.backgroundColor = '#c8e6c9';
  }
}
