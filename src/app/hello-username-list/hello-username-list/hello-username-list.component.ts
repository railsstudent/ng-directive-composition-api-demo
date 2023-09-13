import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { HelloUsernameComponent } from '../hello-username/hello-username.component';

@Component({
  selector: 'app-hello-username-list',
  standalone: true,
  imports: [HelloUsernameComponent],
  template: `
    <div>
      <p>Host component that hosts directives and inputs</p>
      <app-hello-username [username]="'John Doe'" [bgColor]="bgColor" [size]="size" (clicked)="handleClicked()">
      </app-hello-username>
      <p>You are clicked {{clickedTimes()}} time(s).</p>

      <p>Host component that uses host directives and default values</p>
      <app-hello-username [username]="'John Doe'"></app-hello-username>
    </div>
  `,
  styles: [`
    div {
      border: 1px solid black;
      padding: 0.5rem;
      margin-bottom: 0.5rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloUsernameListComponent {
  @Input({ required: true })
  size!: number;

  @Input({ required: true })
  bgColor!: string

  clickedTimes = signal(0);

  handleClicked() {
    this.clickedTimes.update((clicked) => clicked + 1);
  }

}
