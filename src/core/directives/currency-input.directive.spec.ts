import { CurrencyInputDirective } from './currency-input.directive';
import { ElementRef } from '@angular/core';

describe('CurrencyInputDirective', () => {
  it('should create an instance', () => {
    const el: ElementRef = {
      nativeElement: document.createElement('input')
    };
    const directive = new CurrencyInputDirective(el);
    expect(directive).toBeTruthy();
  });
});
