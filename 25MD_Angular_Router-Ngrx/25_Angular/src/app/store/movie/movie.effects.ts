import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { MovieService } from 'src/app/services/movie.service';
import {
    createMovie,
    createMovieSuccess,
    loadMovies,
    loadMoviesSuccess,
} from './movie.actions';

@Injectable()
export class MovieEffects {
    constructor (
        private actions$: Actions,
        private movieService: MovieService,
    ) {}

    loadMovies$ = createEffect(() => this.actions$.pipe(
        ofType(loadMovies),
        mergeMap(() => this.movieService
            .getAllMovies()
            .pipe(map((movies) => loadMoviesSuccess({ movies })))),
    ));

    postMovie$ = createEffect(() => this.actions$.pipe(
        ofType(createMovie),
        mergeMap((action) => this.movieService
            .postMovie(action.movie)
            .pipe(map(() => createMovieSuccess({ movie: { ...action.movie } })))),
    ));
}
