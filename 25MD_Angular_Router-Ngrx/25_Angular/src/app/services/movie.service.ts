import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TMovie } from '../types/movie';

@Injectable({
    providedIn: 'root',
})
export class MovieService {
    constructor (private http:HttpClient) { }

    getAllMovies (): Observable<TMovie[]> {
        return this.http.get<TMovie[]>('http://localhost:3004/movies');
    }

    postMovie (movie: TMovie): Observable<TMovie> {
        return this.http.post<TMovie>('http://localhost:3004/movies', movie);
    }
}
