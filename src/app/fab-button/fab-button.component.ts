import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
	selector: 'app-fab-button',
	template: `
  <button mat-fab
    [color]="color"
    [disabled]="isDisabled"
    (click)="handleClick()"
  >
    <mat-icon>{{label}}</mat-icon>
  </button>
  `,
	styleUrls: [ './fab-button.component.scss' ]
})
export class FabButtonComponent implements OnInit {

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
