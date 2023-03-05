import { createReducer, on } from '@ngrx/store';
import { TMovie } from 'src/app/types/movie';
import { createMovie } from './movie.actions';

export const initialState: TMovie[] = [
    { title: 'The Maze Runner', year: 2014, image: 'https://a.ltrbxd.com/resized/sm/upload/yl/oy/c0/7b/the-maze-runner-1200-1200-675-675-crop-000000.jpg?v=3ddda44922' },
    { title: 'Wednesday', year: 2022, image: 'https://ntvb.tmsimg.com/assets/p23063500_b_h8_ad.jpg?w=1280&h=720' },
    { title: 'The Last of Us', year: 2023, image: 'https://www.ixbt.com/img/n1/news/2022/11/0/654546_large.png' },
    { title: 'Breaking Bad', year: 2008, image: 'https://ntvb.tmsimg.com/assets/p8696131_b_h10_aa.jpg?w=1280&h=720' },
];

export const movieReducer = createReducer(
    initialState,
    on(createMovie, (state, { movie }) => [...state, movie]),
);
