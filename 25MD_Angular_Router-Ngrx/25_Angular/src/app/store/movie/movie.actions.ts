import { createAction, props } from '@ngrx/store';
import { TMovie } from 'src/app/types/movie';

export const createMovie = createAction('[Movie Component] Create Movie', props<{movie: TMovie}>());
