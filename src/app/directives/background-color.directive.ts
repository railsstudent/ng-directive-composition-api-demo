import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]',
  standalone: true,
})
export class BackgroundColorDirective {
  @Input()
  @HostBinding('style.background-color')
  bgColor = 'goldenrod';
}