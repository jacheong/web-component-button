import { 
  Directive,
  Input,
  ComponentFactoryResolver,
  ViewContainerRef,
  Injector,
  OnInit
} from '@angular/core';
import { BasicButtonComponent } from './basic-button/basic-button.component';
import { FabButtonComponent } from './fab-button/fab-button.component';
import { FlatButtonComponent } from './flat-button/flat-button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { MiniFabButtonComponent } from './mini-fab-button/mini-fab-button.component';
import { RaisedButtonComponent } from './raised-button/raised-button.component';
import { StrokedButtonComponent } from './stroked-button/stroked-button.component';

const componentMapper = {
  basic: BasicButtonComponent,
  fab: FabButtonComponent,
  flat: FlatButtonComponent,
  icon: IconButtonComponent,
  miniFab: MiniFabButtonComponent,
  raised: RaisedButtonComponent,
  stroked: StrokedButtonComponent
};

@Directive({
  selector: '[appButtonBlueprint]'
})
export class ButtonBlueprintDirective implements OnInit {

  @Input() type: string;
  @Input() label: string;
  @Input() color: string;
  @Input() isDisabled: boolean;
  componentRef: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      componentMapper[this.type]
    );

    this.componentRef = this.viewContainerRef.createComponent(factory);
    this.componentRef.instance.label = this.label;
    this.componentRef.instance.color = this.color;
    this.componentRef.instance.isDisabled = this.isDisabled;
  }

}
