import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightarray]',
})
export class Highlightarray {
  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) {}

  @Input() set makeSelect(condition: boolean) {
    if (condition) {
      this.renderer.addClass(this.element.nativeElement, 'most-liked');
    }
  }
}
