import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
	selector: 'app-mini-fab-button',
	template: `
  <button mat-mini-fab
    [color]="color"
    [disabled]="isDisabled"
    (click)="handleClick()"
  >
    <ng-container *ngIf="label; else iconTemplate">{{label}}</ng-container>
    <ng-template #iconTemplate>
      <mat-icon>{{icon}}</mat-icon>
    </ng-template> 
  </button>
  `,
	styleUrls: [ './mini-fab-button.component.scss' ]
})
export class MiniFabButtonComponent implements OnInit {

  @Input() label: string;
  @Input() icon: string;
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
