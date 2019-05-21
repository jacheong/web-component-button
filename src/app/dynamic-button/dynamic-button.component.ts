import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-button',
  template: `
    <ng-container appButtonBlueprint
      [type]="type"
      [color]="color"
      [label]="label"
      [isDisabled]="isDisabled"
    >
    </ng-container>
  `,
  styleUrls: ['./dynamic-button.component.scss']
})
export class DynamicButtonComponent implements OnInit {

  @Input() type: string;
  @Input() label: string;
  @Input() color: string;
  @Input() isDisabled: boolean;

  constructor() { }

  ngOnInit() {
  }

}
