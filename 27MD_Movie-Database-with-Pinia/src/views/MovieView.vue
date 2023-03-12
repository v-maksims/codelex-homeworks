<template>
    <MyLoader v-if="isLoading" class="loader__wrap"/>
    <div v-else class="movie__wrap">
        <h1 class="title">{{ movie.Title }}</h1>
        <div class="header">
            <img 
                class="header__image"
                :src="movie.Poster" 
                :alt="movie.Title"
            >
            <div class="header__content">
                <div class="header__rating">
                    <span class="item-title">Raitings:</span>
                    <div class="header__item-wrap">
                        <div
                            class="header__rating-item"
                            v-for="rating in movie.Ratings" 
                            :key="rating.Source"
                        >
                        <span class="header__rating-item-source">{{ rating.Source }}</span>
                        <span class="header__rating-item-value">{{  rating.Value }}</span>
                    </div>
                    <div class="header__rating-item">
                        <span class="header__rating-item-source">Metascore</span>
                        <span class="header__rating-item-value">{{ movie.Metascore }}</span>
                    </div>
                </div>
            </div>
            <div class="header__item-wrap">
                <span class="item-title">Date of release: </span>
                <span class="item-text">{{ movie.Released }}</span>
            </div>
            <div class="header__item-wrap">
                <span class="item-title">Run time: </span>
                <span class="item-text">{{ movie.Runtime }}</span>
            </div>
            <div class="header__item-wrap">
                <span class="item-title">Genres: </span>
                <span class="item-text">{{ movie.Genre }}</span>
            </div>
            <div class="header__item-wrap">
                <span class="item-title">Languages: </span>
                <span class="item-text">{{ movie.Language }}</span>
            </div>
            <div class="header__item-wrap" v-if="movie.BoxOffice">
                <span class="item-title">Box office: </span>
                <span class="item-text">{{ movie.BoxOffice }}</span>
            </div>
            <div class="header__item-wrap">
                <span class="item-title">Awards: </span>
                <span class="item-text">{{ movie.Awards }}</span>
            </div>
            <div class="header__item-wrap" v-if="movie.totalSeasons">
                <span class="item-title">Total seasons: </span>
                <span class="item-text">{{ movie.totalSeasons }}</span>
            </div>
        </div>
        </div>
        <div class="main">
            <div class="main__item-wrap">
                <h6 class="title">Short description</h6>
                <p class="paragraph">{{ movie.Plot }}</p>
            </div>
            <h6 class="title">Cast and Crew </h6>
            <div class="main__item-wrap">
                <span class="item-title">Director:</span>
                <span class="item-text">{{ movie.Director }}</span>
            </div>
            <div class="main__item-wrap">
                <span class="item-title">Writer:</span>
                <span class="item-text">{{ movie.Writer }}</span>
            </div>
            <div class="main__item-wrap">
                <span class="item-title">Actors:</span>
                <span class="item-text">{{ movie.Actors }}</span>
            </div>
        </div>
        <MyButton @click="returnBack">Return back</MyButton>
    </div>
</template>

<script lang="ts">
import { useMovieStore } from '@/stores/movieStore';
import { computed } from 'vue';

import MyLoader from '@/components/UI/MyLoader.vue';
import MyButton from '@/components/UI/MyButton.vue';

export default {
    setup  () {
        const movieStore = useMovieStore();
        return {
            movie: computed(() => movieStore.movieById),
            loadMovie: movieStore.loadMovie,
            isLoading: computed(() => movieStore.isLoading)
        };
    },
    components: {
        MyLoader, MyButton
    },
    mounted (){
        this.loadMovie(this.movieId);
    },
    data () {
        return {
            movieId: this.$route.params.id as string
        };
    },
    methods: {
        returnBack () {
            window.history.back();
        }
    }
};
</script>

<style scoped>

    .movie__wrap{
        margin-bottom: 50px;
    }

    .title{
        font-size: 3rem;
        text-align: center;
        font-weight: 800;
    }

    .paragraph{
        font-size: 1.5rem;
    }

    .header{
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 10px;
        justify-items: center;
        height: 80%;
        max-height: 450px;
        overflow: hidden;
    }

    .header__image{
        width: 100%;
        max-width: 300px;
        height: 100%;
        object-fit: cover;
    }

    .header__content{
        width: 100%;
    }

    .header__rating{
        display: grid;
    }

    .item-title{
        font-size: 1.5rem;
        font-weight: 600;
    }

    .header__item-wrap{
        display: flex;
        gap: 10px;
        align-items: center;
    }
    
    .header__rating-item{
        text-align: center;
        display: flex;
        gap: 10px;
        flex-direction: column;
        border: 1px solid aliceblue;
        padding: 5px;
        border-radius: 5px;
        align-items: center;
        height: 100%;
        justify-content: center;
    }

    .header__rating-item-source,
    .header__rating-item-value{
        font-size: 1.25rem;
    }

    .header__rating-item-value{
        font-weight: bold;
    }

    .item-text{
        font-size: 1.5rem;
    }

    .main__item-wrap{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

</style>