import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { CURRENCY } from 'src/core/consts/currency';
import { Currency } from 'src/core/types/currency.type';

@Component({
  selector: 'app-header-currency',
  templateUrl: './header-currency.component.html'
})
export class HeaderCurrencyComponent implements OnInit {
  @Input() currency = CURRENCY.USD;
  @Output() onSelect = new EventEmitter<CURRENCY>();

  options: Currency[] = [
    {
      flag: 'us',
      text: 'US Dollar',
      currency: CURRENCY.USD
    },
    {
      flag: 'ua',
      text: 'Ukraine Hryvnia',
      currency: CURRENCY.UAH
    },
    {
      flag: 'eu',
      text: 'Euro',
      currency: CURRENCY.EUR
    },
  ];

  ngOnInit(): void {
  }

  change(currency: CURRENCY): void {
    this.currency = currency;
    this.onSelect.emit(currency);
  }

}
