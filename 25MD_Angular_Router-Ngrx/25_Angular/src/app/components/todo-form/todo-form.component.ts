import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
    todoForm = new FormGroup({
        title: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
        ]),
    });

    @Output() todoSubmitted:EventEmitter<string> = new EventEmitter();

    submitForm () {
        this.todoSubmitted.emit(
            String(this.todoForm.value.title),
        );
        this.todoForm.reset();
    }

    getControl (control: string) {
        return this.todoForm.get(control);
    }
}
