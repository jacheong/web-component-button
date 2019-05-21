import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
	selector: 'app-raised-button',
	template: `
  <button mat-raised-button
    [color]="color"
    [disabled]="isDisabled"
    (click)="handleClick()"
  >
    {{label}}
  </button>
  `,
	styleUrls: [ './raised-button.component.scss' ]
})
export class RaisedButtonComponent implements OnInit {

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
