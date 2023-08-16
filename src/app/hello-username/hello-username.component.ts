import { ChangeDetectionStrategy, Component  } from '@angular/core';
import { FontSizeDirective } from '../directives/font-size.directive';
import { BackgroundColorDirective } from '../directives/background-color.directive';
import { HoverBlockDirective } from '../directives/hover-block.directive';

@Component({
  selector: 'app-hello-username',
  standalone: true,
  hostDirectives: [
    {
      directive: FontSizeDirective,
      inputs: ['size'],
    },
    {
      directive: BackgroundColorDirective,
      inputs: ['bgColor'],
    },
    HoverBlockDirective,
  ],
  template: `
    <p>Hello Connie!!! Hover me to bold text</p>
  `,
  styles: [`
    :host {
      display: block;
    }

    p {
      padding: 0.5rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloUsernameComponent {}