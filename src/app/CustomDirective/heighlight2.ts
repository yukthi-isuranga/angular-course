import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHeighlight2]',
})
export class Heighlight2 {
  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '#f1948a');
    this.renderer.addClass(this.element.nativeElement, 'container');
    this.renderer.setAttribute(this.element.nativeElement, 'title', 'This is setAttribute');
  }
}
