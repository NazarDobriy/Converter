import { Component } from '@angular/core';

import { CURRENCY } from 'src/core/consts/currency';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  CURRENCY = CURRENCY;
}
