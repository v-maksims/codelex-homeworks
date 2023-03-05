import { createReducer, on } from '@ngrx/store';
import { TTodo } from 'src/app/types/todo';
import { create, deleteTodo } from './todo.actions';

export const initialState: TTodo[] = [];

export const todoReducer = createReducer(
    initialState,
    on(create, (state, { todo }) => [...state, todo]),
    on(deleteTodo, (state, { id }) => state.filter((todo, i) => i !== id)),
);
