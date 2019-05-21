import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-elements-button';
  label= "click me";
  color = "primary";
  isDisabled = "false";
  type = "raised";
}
