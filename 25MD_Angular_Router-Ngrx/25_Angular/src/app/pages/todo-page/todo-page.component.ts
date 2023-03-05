import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TTodo } from 'src/app/types/todo';
import { create, deleteTodo } from '../../store/todo/todo.actions';

@Component({
    selector: 'app-todo-page',
    templateUrl: './todo-page.component.html',
    styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent {
    todos$: Observable<TTodo[]>;

    constructor (private store: Store<{ todo: TTodo[] }>) {
        this.todos$ = store.select('todo');
    }

    create (title: string) {
        const todo: TTodo = { title, completed: false };
        this.store.dispatch(create({ todo }));
    }

    delete (id: number) {
        this.store.dispatch(deleteTodo({ id }));
    }
}
