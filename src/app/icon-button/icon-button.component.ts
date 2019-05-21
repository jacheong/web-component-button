import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
	selector: 'app-icon-button',
	template: `
  <button mat-icon-button
    [color]="color"
    [disabled]="isDisabled"
    (click)="handleClick()"
  >
    <mat-icon>{{label}}</mat-icon>
  </button>
  `,
	styleUrls: [ './icon-button.component.scss' ]
})
export class IconButtonComponent implements OnInit {

  @Input() label: string;
  @Input() color: string;
  @Input() isDisabled: boolean;

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {}
  
  handleClick() {
    const customEvent = new CustomEvent('clicked');
    this.el.nativeElement.dispatchEvent(customEvent);
  }
}
