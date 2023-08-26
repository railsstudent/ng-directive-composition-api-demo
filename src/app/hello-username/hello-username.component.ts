import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BackgroundColorDirective } from '../directives/background-color.directive';
import { ClickDirective } from '../directives/click.directive';
import { FontSizeDirective } from '../directives/font-size.directive';
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
    {
      directive: ClickDirective,
      outputs: ['clicked'],
    }
  ],
  template: `
    <p>Hello {{username}}!!! Hover me to bold text</p>
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
export class HelloUsernameComponent {
  @Input({ required: true })
  username!: string;
}