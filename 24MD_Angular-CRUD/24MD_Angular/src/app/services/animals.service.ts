import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ErrorService } from './error.service';

export type TAnimal = {
    _id:string;
    name: string;
    category: string;
}

@Injectable({
    providedIn: 'root',
})

export class AnimalsService {
    constructor (
      private http: HttpClient,
      private errorService: ErrorService,
    ) {}

    getAllAnimals () {
        return this.http
            .get<TAnimal[]>('http://localhost:3004/animals')
            .pipe(catchError(this.errorHandler.bind(this)));
    }

    deleteAnimal (id: string) {
        return this.http
            .delete(`http://localhost:3004/animals/${id}`)
            .pipe(catchError(this.errorHandler.bind(this)));
    }

    postAnimal (data:Omit<TAnimal, '_id'>) {
        return this.http
            .post<TAnimal>('http://localhost:3004/animals', data)
            .pipe(catchError(this.errorHandler.bind(this)));
    }

    private errorHandler (error:HttpErrorResponse) {
        this.errorService.handle(error.message);
        return throwError(() => error.message);
    }
}
