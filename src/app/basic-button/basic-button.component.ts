import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-basic-button',
  template: `
    <button mat-button
      [color]="color"
      [disabled]="isDisabled"
      (click)="handleClick()"
    >
      {{label}}
    </button>
  `,
  styleUrls: ['./basic-button.component.scss']
})
export class BasicButtonComponent implements OnInit {

  @Input() label: string;
  @Input() color: string;
  @Input() isDisabled: boolean;

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {
  }

  handleClick() {
    const customEvent = new CustomEvent('clicked');
    this.el.nativeElement.dispatchEvent(customEvent);
  }

}
