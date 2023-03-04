import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-switch',
    templateUrl: './switch.component.html',
    styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent {
    @Output() switchValue: EventEmitter<boolean> = new EventEmitter();

    isChecked = true;

    switchHandler () {
        this.isChecked = !this.isChecked;
        this.switchValue.emit(this.isChecked);
    }
}
