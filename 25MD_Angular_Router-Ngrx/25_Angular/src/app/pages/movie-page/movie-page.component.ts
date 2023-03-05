import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TMovie } from 'src/app/types/movie';

@Component({
    selector: 'app-movie-page',
    templateUrl: './movie-page.component.html',
    styleUrls: ['./movie-page.component.scss'],
})
export class MoviePageComponent {
    movies$: Observable<TMovie[]>;

    constructor (private store: Store<{movie: TMovie[]}>) {
        this.movies$ = store.select('movie');
    }
}
