import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
	selector: 'app-stroked-button',
	template: `
  <button mat-stroked-button
    [color]="color"
    [disabled]="isDisabled"
    (click)="handleClick()"
  >
    {{label}}
  </button>
  `,
	styleUrls: [ './stroked-button.component.scss' ]
})
export class StrokedButtonComponent implements OnInit {

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
