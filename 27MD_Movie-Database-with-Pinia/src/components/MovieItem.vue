<template>
    <RouterLink class="movie__link" :to="`/movie/${movie.imdbID}`" >
        <div class="movie__wrap">
            <img class="movie__image" :src="movie.Poster" :alt="movie.Title">
            <div class="movie__info">
                <h4 class="movie__title">{{ movie.Title }}</h4>
                <span class="movie__text">{{ movie.Year }}</span>
                <span class="movie__text">{{ movie.Type }}</span>
            </div>
        </div>
    </RouterLink>
</template>

<script lang="ts">
import type { TMoviesShort } from '@/stores/movieStore';
import type { PropType } from 'vue';

export default {

    props: {
        movie: {
            type: Object as PropType<TMoviesShort>,
            required: true
        }
    }
};
</script>

<style scoped>
    .movie__link{
        text-decoration: none;
        transition: scale .2s;
    }
    .movie__link:hover{
        scale: .90;
    }
    .movie__wrap{
        display: flex;
        background-color: grey;
        border-radius: 10px;
        overflow: hidden;
        max-height: 300px;
        height: 100%;
    }
    
    .movie__image{
        object-fit: cover;
        width: 50%;
        max-width: 250px;
    }
    
    .movie__info{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        padding: 20px;
        align-self: center;
    }
    .movie__title{
        font-size: 1.5rem;
        font-weight: 700;
        text-align: center;
        color: aliceblue;
    }
    .movie__text{
        font-size: 1.25rem;
        font-weight: 500;
        color: var( --vt-c-text-light-1);
    }
</style>