import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BackgroundBlockDirective } from '../directives/background-block.directive';

@Component({
  selector: 'app-hello-background-block',
  standalone: true,
  hostDirectives: [
    BackgroundBlockDirective
  ],
  template: `
    <p>Hello BackgroundBlockDirective!!!</p>
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
export class HelloBackgroundBlockComponent {}