import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
	selector: 'app-flat-button',
	template: `
  <button mat-flat-button
    [color]="color"
    [disabled]="isDisabled"
    (click)="handleClick()"
  >
    {{label}}
  </button>
  `,
	styleUrls: [ './flat-button.component.scss' ]
})
export class FlatButtonComponent implements OnInit {

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
