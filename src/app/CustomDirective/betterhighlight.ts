import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]',
})
export class Betterhighlight {
  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) {}
  @Input() backGroundColor1?: string;
  @Input() backGroundColor2?: string;

  @HostBinding('style.backgroundColor') background?: string = this.backGroundColor1;
  @HostBinding('style.border') border: string = 'none';

  @HostListener('mouseenter') mouseenter() {
    this.background = this.backGroundColor2;
    this.border = 'red 2px solid';
  }

  @HostListener('mouseleave') mouseleave() {
    this.background = 'transparent';
    this.border = 'none';
  }

  ngOnInit() {
    this.background = this.backGroundColor1;
  }
}
