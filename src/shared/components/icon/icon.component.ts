import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html'
})
export class IconComponent {
  @Input() name: string = '';
  @Input() style: string = '';
}
