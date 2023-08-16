import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HelloBackgroundBlockComponent } from './hello-background-block/hello-background-block.component';
import { HelloUsernameComponent } from './hello-username/hello-username.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, HelloUsernameComponent, HelloBackgroundBlockComponent],
  template: `
    <h3>Practice standalone directive API</h3>

    <app-hello-username [username]="'John Doe'" [bgColor]="bgColor" [size]="size"></app-hello-username>

    <app-hello-username [username]="'John Doe (Default directive values)'"></app-hello-username>

    <app-hello-background-block 
      [backgroundColor]="bgColor" [size]="size"></app-hello-background-block>

    <div>
      <label for="size">
        <span>Size:</span>
        <input id="size" name="size" type="number"
          [(ngModel)]="size"  
          [min]="minSize"
          [max]="maxSize"
        >
      </label>
    </div>

    <div>
      <label for="bgColor">
        <span>Background Color:</span>
        <select id="bgColor" name="bgColor" type="text"
          [(ngModel)]="bgColor"
        >
          <option value="">Please select a color</option>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="cyan">Cyan</option>
          <option value="green">Green</option>
          <option value="magenta">Magenta</option>
        </select>
      </label>
    </div>

    <p>Size: {{size}}</p>
    <p>Background color: {{bgColor}}</p>
  `,
  styles: [`
    :host {
      display: block;
    }

    label > span {
      margin-right: 0.5rem;
    }

    input[type="number"] {
      width: 120px;
    }  
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  size = 12;
  bgColor = 'yellow';

  minSize= 12;
  maxSize= 64;

  constructor(title: Title) {
    title.setTitle('ng-directive-composition-api-demo');
  }
}
