import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { HeaderCurrencyComponent } from './components/header/header-currency/header-currency.component';
import { CurrencyInputDirective } from './directives/currency-input.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderCurrencyComponent,
    CurrencyInputDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
