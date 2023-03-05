import { Component, Input } from '@angular/core';
import { TMovie } from 'src/app/types/movie';

@Component({
    selector: 'app-movie-item',
    templateUrl: './movie-item.component.html',
    styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent {
  @Input() movie: TMovie;
}
