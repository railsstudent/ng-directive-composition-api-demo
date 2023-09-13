import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { BackgroundColorDirective } from './directives/background-color.directive';
import { FontSizeDirective } from './directives/font-size.directive';
import { HoverBlockDirective } from './directives/hover-block.directive';
import { HelloUsernameListComponent } from './hello-username-list/hello-username-list/hello-username-list.component';
import { HelloUsernameWithoutApiComponent } from './hello-username-without-api/hello-username-without-api.component';
import { HelloBackgroundBlockListComponent } from './hello-background-block-list/hello-background-block-list/hello-background-block-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,
    HelloUsernameWithoutApiComponent,
    FontSizeDirective,
    BackgroundColorDirective,
    HoverBlockDirective,
    HelloUsernameListComponent,
    HelloBackgroundBlockListComponent
  ],
  template: `
    <h3>Practice standalone directive API</h3>

    <p>Host component uses directives the old way</p>
    <app-hello-username-without-api appFontSize appBackgroundColor appHoverBlock
      [username]="'John Doe'" [size]="size" [bgColor]="bgColor">
    </app-hello-username-without-api>

    <app-hello-username-list [bgColor]="bgColor" [size]="size"></app-hello-username-list>
    <app-hello-background-block-list [bgColor]="bgColor" [size]="size"></app-hello-background-block-list>

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
        <select id="bgColor" name="bgColor" type="text" [(ngModel)]="bgColor">
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
