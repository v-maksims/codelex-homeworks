import { createReducer, on } from '@ngrx/store';
import { TMovie } from 'src/app/types/movie';
import { createMovieSuccess, loadMoviesSuccess } from './movie.actions';

export const initialState: TMovie[] = [];

export const movieReducer = createReducer(
    initialState,
    on(createMovieSuccess, (state, { movie }) => [...state, movie]),
    on(loadMoviesSuccess, (state, { movies }) => movies),
);
