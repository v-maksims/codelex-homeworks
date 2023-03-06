import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { TMovie } from '../types/movie';
import { ErrorService } from './error.service';

@Injectable({
    providedIn: 'root',
})
export class MovieService {
    constructor (
        private http:HttpClient,
        private errorService: ErrorService,
    ) { }

    getAllMovies (): Observable<TMovie[]> {
        return this.http
            .get<TMovie[]>('http://localhost:3004/movies')
            .pipe(catchError(this.errorHandler.bind(this)));
    }

    postMovie (movie: TMovie): Observable<TMovie> {
        return this.http
            .post<TMovie>('http://localhost:3004/movies', movie)
            .pipe(catchError(this.errorHandler.bind(this)));
    }

    private errorHandler (error:HttpErrorResponse) {
        this.errorService.handle(error.message);
        return throwError(() => error.message);
    }
}
