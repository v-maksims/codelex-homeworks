import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label = '';

  @Input() type: 'button' | 'submit' = 'submit';

  @Input() disabled: boolean;
}
