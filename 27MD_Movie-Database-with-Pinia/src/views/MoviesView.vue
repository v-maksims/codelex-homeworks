<template>
    <div class="movies-view__wrap">
        <SearchBar @search="searchMovies"/>
        <MovieList 
            :movies="movies" 
            v-if="!!movies.length"
        />
        <span 
            class="movies-view__text"
            v-else
        >
            No movies found! 
        </span>
    </div>
</template>

<script lang="ts">
import { useMovieStore } from '@/stores/movieStore';

import MovieList from '@/components/MovieList.vue';
import SearchBar from '@/components/SearchBar.vue';

export default {
    setup () {
        const movie = useMovieStore();
        return {
            movies: movie.moviesList,
            loadMovies: movie.loadMovies,
            moviesCount: movie.movieResult
        };
    },
    components: {
        MovieList, SearchBar
    },
    methods: {
        searchMovies (params: string) {
            this.loadMovies(params);
        }
    },
};
</script>

<style scoped>
    .movies-view__wrap{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .movies-view__text{
        font-size: 2rem;
        display: inline-block;
        text-align: center;
        font-weight: 500;
    }
</style>
