import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class Style {
  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) {}

  @Input() set appStyle(style: Object) {
    let valuesCss = Object.entries(style);

    for (let val of valuesCss) {
      console.log(val);
      this.renderer.setStyle(this.element.nativeElement, val[0], val[1]);
    }
  }
}
