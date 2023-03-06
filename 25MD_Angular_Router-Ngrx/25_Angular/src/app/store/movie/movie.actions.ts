import { createAction, props } from '@ngrx/store';
import { TMovie } from 'src/app/types/movie';

export const createMovie = createAction('[Movie Component] Create Movie', props<{movie: TMovie}>());
export const createMovieSuccess = createAction('[Movie Component] Create Movie Success', props<{movie: TMovie}>());
export const loadMovies = createAction('[Movie Component] Load Movie');
export const loadMoviesSuccess = createAction('[Movie Component] Load Movies Success', props<{movies: TMovie[]}>());
