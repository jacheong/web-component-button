import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { BasicButtonComponent } from './basic-button/basic-button.component';
import { RaisedButtonComponent } from './raised-button/raised-button.component';
import { FlatButtonComponent } from './flat-button/flat-button.component';
import { StrokedButtonComponent } from './stroked-button/stroked-button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { FabButtonComponent } from './fab-button/fab-button.component';
import { MiniFabButtonComponent } from './mini-fab-button/mini-fab-button.component';
import { ButtonBlueprintDirective } from './button-blueprint.directive';
import { DynamicButtonComponent } from './dynamic-button/dynamic-button.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicButtonComponent,
    RaisedButtonComponent,
    FlatButtonComponent,
    StrokedButtonComponent,
    IconButtonComponent,
    FabButtonComponent,
    MiniFabButtonComponent,
    ButtonBlueprintDirective,
    DynamicButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    BasicButtonComponent,
    RaisedButtonComponent,
    FlatButtonComponent,
    StrokedButtonComponent,
    IconButtonComponent,
    FabButtonComponent,
    MiniFabButtonComponent,
  ]
})
export class AppModule { }
