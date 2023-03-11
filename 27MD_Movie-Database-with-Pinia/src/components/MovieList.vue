<template>
    <div class="movie-list">
        <MovieItem v-for="movie in movies" :key="movie.imdbID" :movie="movie"/>
    </div>
</template>

<script lang="ts">
import type { TMoviesShort } from '@/stores/movieStore';
import type { PropType } from 'vue';

import MovieItem from './MovieItem.vue';

export default {
    components: {
        MovieItem
    },
    props: {
        movies: {
            type: [] as PropType<TMoviesShort[]>,
            required: true
        }
    },
    data () {
        return {

        };
    }
};
</script>

<style scoped>
    .movie-list{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }

    @media (max-width: 850px){
        .movie-list{       
        grid-template-columns: 1fr;
    }
    }
</style>