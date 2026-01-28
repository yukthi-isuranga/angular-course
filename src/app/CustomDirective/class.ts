import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class Class {
  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) {}

  @Input() set display(value: object) {
    let entris = Object.entries(value);

    for (let [classname, condition] of entris) {
      if (condition) {
        this.renderer.addClass(this.element.nativeElement, classname);
      }
    }
  }
}
