import { createAction, props } from '@ngrx/store';
import { TTodo } from 'src/app/types/todo';

export const create = createAction('[Todo Component] Create', props<{todo: TTodo}>());
export const deleteTodo = createAction('[Todo Component] Delete', props<{id: number}>());
