import { createReducer, on } from '@ngrx/store';
import { TMovie } from 'src/app/types/movie';
import { createMovie } from './movie.actions';

export const initialState: TMovie[] = [
    { title: 'The Maze Runner', year: 2014, image: 'https://a.ltrbxd.com/resized/sm/upload/yl/oy/c0/7b/the-maze-runner-1200-1200-675-675-crop-000000.jpg?v=3ddda44922' },
];

export const movieReducer = createReducer(
    initialState,
    on(createMovie, (state, { movie }) => [...state, movie]),
);
