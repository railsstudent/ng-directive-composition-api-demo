import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { HelloBackgroundBlockComponent } from '../hello-background-block/hello-background-block.component';

@Component({
  selector: 'app-hello-background-block-list',
  imports: [HelloBackgroundBlockComponent],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <p>Host component that uses composite host directive</p>
      <app-hello-background-block
        [backgroundColor]="bgColor" [size]="size"
        (clicked)="helloBackgroundBlockClicked()">
      </app-hello-background-block>
      <p>You are clicked {{ blockClickedTimes() }} time(s).</p>

      <p>Host component that uses composite host directive and default values</p>
      <app-hello-background-block></app-hello-background-block>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }

    div {
      border: 1px solid black;
      padding: 0.5rem;
      margin-bottom: 0.5rem;
    }
  `],
})
export class HelloBackgroundBlockListComponent {
  @Input({ required: true })
  size!: number;

  @Input({ required: true })
  bgColor!: string

  blockClickedTimes = signal(0);

  helloBackgroundBlockClicked() {
    this.blockClickedTimes.update((clicked) => clicked + 1);
  }
}
