import { Directive, Input } from '@angular/core';
import { BackgroundColorDirective } from './background-color.directive';
import { FontSizeDirective } from './font-size.directive';
import { HoverBlockDirective } from './hover-block.directive';

@Directive({
  selector: '[appBackgroundBlock]',
  standalone: true,
  hostDirectives: [
    {
      directive: FontSizeDirective,
      inputs: ['size'],
    },
    {
      directive: BackgroundColorDirective,
      inputs: ['bgColor:backgroundColor'],
    },
    HoverBlockDirective,
  ]
})
export class BackgroundBlockDirective {
  @Input()
  size!: string;

  @Input()
  bgColor!: string;
}