import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCurrencyInput]',
})
export class CurrencyInputDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: Event): void {
    const initialValue = this.el.nativeElement.value;

    const dotsAmount = initialValue.split('.').length - 1;

    if (!dotsAmount) {
      this.el.nativeElement.value = initialValue.replace(/[^0-9.]*/g, '');
    } else {
      if (initialValue.length > 1) {
        this.el.nativeElement.value = initialValue.replace(
          /^([^.]*\.)|\D+/g,
          '$1'
        );
      } else {
        this.el.nativeElement.value = initialValue.replace(/[^0-9]*/g, '');
      }
    }

    if (initialValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
