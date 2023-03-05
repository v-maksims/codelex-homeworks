import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() inputId = '';

  @Input() control = new FormControl();

  @Input() label = '';

  @Input() type = 'text';

  ngOnInit () {
      throw new Error('Method not implemented.');
  }
}
