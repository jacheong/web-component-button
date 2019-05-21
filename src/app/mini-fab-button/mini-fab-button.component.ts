import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
	selector: 'app-mini-fab-button',
	template: `
  <button mat-mini-fab
    [color]="color"
    [disabled]="isDisabled"
    (click)="handleClick()"
  >
    <mat-icon>{{label}}</mat-icon>
  </button>
  `,
	styleUrls: [ './mini-fab-button.component.scss' ]
})
export class MiniFabButtonComponent implements OnInit {

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
