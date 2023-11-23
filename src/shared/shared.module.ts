import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { IconComponent } from './components/icon/icon.component';

@NgModule({
  declarations: [
    IconComponent
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule.forRoot()
  ],
  exports: [
    IconComponent
  ]
})
export class SharedModule { }
