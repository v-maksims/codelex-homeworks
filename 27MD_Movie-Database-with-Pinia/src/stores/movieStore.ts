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
    totalSeasons?: number,
}

export type TMoviesShort = {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
}

type TMovieResponseShort = {
    Response: string;
    Search: TMoviesShort[];
    totalResults: string;
    Error?: string;
}

export const useMovieStore = defineStore('counter', {
    state: () => ({ 
        moviesList: [] as TMoviesShort[],
        movieResult: 0,
        movieById: {} as TMovieFull,
        currentPage: 1,
        isLoading: false,
        isError: false,
        errorMessage: ''
    }),
    getters : {
        pageCount (): number {
            const moviesPerPage = 10;
            const movies = this.movieResult;
            const pages = Math.ceil(movies / moviesPerPage);

            if (movies % moviesPerPage === 0) {
                return pages - 1;
            }
            return pages;
        }
    },
    actions: {
        loadMovies (search: string, page: number) {
            this.isLoading = true;
            axios
                .get<TMovieResponseShort>(`http://www.omdbapi.com/?s=${search}&page=${page}&apikey=79ee6448`)
                .then(({ data }) => {
                    this.isLoading = false;

                    if(data.Response === 'True'){
                        this.moviesList = data.Search;
                        this.movieResult = Number(data.totalResults);
                        return;
                    }

                    this.isError = true;
                    this.errorMessage = String(data.Error);
                })
                .catch(({ response }) => {
                    this.isLoading = false;
                    this.isError = true;
                    this.errorMessage = response.data.Error;
                    console.log('error');
                });
        },
        loadMovie (id: string) {
            this.isLoading = true;
            axios
                .get<TMovieFull>(`http://www.omdbapi.com/?i=${id}&apikey=79ee6448`)
                .then(({ data }) => {
                    this.movieById = data;
                    this.isLoading = false;
                })
                .catch(({ response }) => {
                    this.isLoading = false;
                    this.isError = true;
                    this.errorMessage = response.data.Error;
                });
        },
        clearError () {
            this.isError = false;
            this.errorMessage = '';
        }
    },
});