import {
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() todo: string;

  @Input() completed: boolean;

  @Input() id: number;

  @Output() deleteHandler: EventEmitter<void> = new EventEmitter();
}
