import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ModalService } from 'src/app/services/modal.service';
import { createMovie } from 'src/app/store/movie/movie.actions';
import { TMovie } from 'src/app/types/movie';

@Component({
    selector: 'app-movie-page',
    templateUrl: './movie-page.component.html',
    styleUrls: ['./movie-page.component.scss'],
})
export class MoviePageComponent {
    movies$: Observable<TMovie[]>;

    constructor (
      private store: Store<{movie: TMovie[]}>,
      public modalService:ModalService,
    ) {
        this.movies$ = store.select('movie');
    }

    create (data: TMovie) {
        this.store.dispatch(createMovie({ movie: data }));
    }
}
