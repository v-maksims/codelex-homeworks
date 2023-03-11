import { defineStore } from 'pinia';
import axios from 'axios';

type TRating = {
    Source: string;
    Value: string;
}

type TMovieFull = {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: TRating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}

export type TMoviesShort = {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
}

type TMovieResponse = {
    Response: string;
    Search: TMoviesShort[];
    totalResults: string;
}

export const useMovieStore = defineStore('counter', {
    state: () => ({ 
        moviesList: [] as TMoviesShort[],
        movieResult: 0,
        movie: {} as TMovieFull
    }),
    actions: {
        loadMovies (search: string, page = 1) {
            axios.get<TMovieResponse>(`http://www.omdbapi.com/?s=${search}&page=${page}&apikey=79ee6448`).then(({ data }) => {
                this.moviesList.splice(0, this.moviesList.length, ...data.Search);
                this.movieResult = Number(data.totalResults);
            });
        },
        loadMovie (id: string) {
            axios.get(`http://www.omdbapi.com/?i=${id}&apikey=79ee6448`).then(({ data }) => this.movie = data);
        }
    },
});