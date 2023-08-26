import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { BackgroundColorDirective } from './directives/background-color.directive';
import { FontSizeDirective } from './directives/font-size.directive';
import { HoverBlockDirective } from './directives/hover-block.directive';
import { HelloBackgroundBlockComponent } from './hello-background-block/hello-background-block.component';
import { HelloUsernameWithoutApiComponent } from './hello-username-without-api/hello-username-without-api.component';
import { HelloUsernameComponent } from './hello-username/hello-username.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, HelloUsernameComponent, HelloBackgroundBlockComponent, 
    HelloUsernameWithoutApiComponent,
    FontSizeDirective,
    BackgroundColorDirective,
    HoverBlockDirective
  ],
  template: `
    <h3>Practice standalone directive API</h3>

    <p>Host component uses directives the old way</p>
    <app-hello-username-without-api appFontSize
      appBackgroundColor appHoverBlock
      [username]="'John Doe'" [size]="size" [bgColor]="bgColor">
    </app-hello-username-without-api>

    <p>Host component that host directives and inputs</p>
    <app-hello-username [username]="'John Doe'" [bgColor]="bgColor" [size]="size" 
      (clicked)="helloUserClicked()"
    ></app-hello-username>
    <p>{{ clickedMsg }}</p>

    <p>Host component that uses host directives and default values</p>
    <app-hello-username [username]="'John Doe'"></app-hello-username>

    <p>Host component that uses composite host directive</p>
    <app-hello-background-block [backgroundColor]="bgColor" [size]="size" 
      (clicked)="helloBackgroundBlockClicked()">
    </app-hello-background-block>
    <p>{{ blockClickedMsg }}</p>

    <p>Host component that uses composite host directive and default values</p>
    <app-hello-background-block></app-hello-background-block>

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

  clickedMsg = 'You are clicked 0 time';
  clickedTimes = 0;

  blockClickedMsg = 'You are clicked 0 time';
  blockClickedTimes = 0;


  constructor(title: Title) {
    title.setTitle('ng-directive-composition-api-demo');
  }

  helloUserClicked() {
    this.clickedTimes = this.clickedTimes + 1;
    this.clickedMsg = `You are clicked ${this.clickedTimes} times`;
  }

  helloBackgroundBlockClicked() {
    this.blockClickedTimes = this.blockClickedTimes + 1;
    this.blockClickedMsg = `You are clicked ${this.blockClickedTimes} times`;
  }
}
