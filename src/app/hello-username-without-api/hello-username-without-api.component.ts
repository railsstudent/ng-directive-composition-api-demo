import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello-username-without-api',
  standalone: true,
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
export class HelloUsernameWithoutApiComponent {
  @Input({ required: true })
  username!: string;
}
