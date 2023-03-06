import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ModalService } from 'src/app/services/modal.service';
import { createMovie, loadMovies } from 'src/app/store/movie/movie.actions';
import { TMovie } from 'src/app/types/movie';

@Component({
    selector: 'app-movie-page',
    templateUrl: './movie-page.component.html',
    styleUrls: ['./movie-page.component.scss'],
})
export class MoviePageComponent implements OnInit {
    movies$: Observable<TMovie[]>;

    constructor (
      private store: Store<{movie: TMovie[]}>,
      public modalService: ModalService,
    ) {}

    ngOnInit () {
        this.movies$ = this.store.select('movie');
        this.store.dispatch(loadMovies());
    }

    postMovie (data: TMovie) {
        this.store.dispatch(createMovie({ movie: data }));
    }
}
