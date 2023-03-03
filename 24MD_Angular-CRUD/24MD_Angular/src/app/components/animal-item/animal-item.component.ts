import {
    Component, Input, Output, EventEmitter,
} from '@angular/core';

@Component({
    selector: 'app-animal-item',
    templateUrl: './animal-item.component.html',
    styleUrls: ['./animal-item.component.scss'],
})
export class AnimalItemComponent {
  @Input() category: string;

  @Input() name: string;

  @Output() deleteHandler: EventEmitter<void> = new EventEmitter();
}
