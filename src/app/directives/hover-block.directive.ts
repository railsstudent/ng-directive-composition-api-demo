import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appHoverBlock]',
  standalone: true,
})
export class HoverBlockDirective {

  el = inject<ElementRef<HTMLParagraphElement>>(ElementRef<HTMLParagraphElement>).nativeElement;

  @HostListener('mouseenter')
  mouseEnter() {
    this.el.style.fontWeight = 'bold';
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.el.style.fontWeight = 'normal';
  }
}