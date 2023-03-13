<template>
    <div class="wrapper">
        <SearchBar @search="searchMovies"/>
        <MyLoader v-if="isLoading" class="loader__wrap"/>
        <div v-else >
            <MovieList 
                :movies="movies"
                :key="currentPage"
                v-if="moviesCount && page"
            />
            <span 
                class="text"
                v-else
            >
                No movies found! 
            </span>
            <Pagination 
                v-if="page && searchParam"
                :currentPage="currentPage" 
                :pageCount="pageCount"
                @nextPage="nextPage"
                @prevPage="prevPage"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { useMovieStore } from '@/stores/movieStore';
import { computed } from 'vue';

import MovieList from '@/components/MovieList.vue';
import SearchBar from '@/components/SearchBar.vue';
import Pagination from '@/components/Pagination.vue';
import MyLoader from '@/components/UI/MyLoader.vue';

export default {
    setup () {
        const movieStore = useMovieStore();
        return {
            movies: computed(() => movieStore.moviesList),
            loadMovies: movieStore.loadMovies,
            moviesCount: computed(() => movieStore.movieResult),
            pageCount: computed(() => movieStore.pageCount),
            currentPage: movieStore.currentPage,
            isLoading: computed(() => movieStore.isLoading),
        };
    },
    components: {
        MovieList, 
        SearchBar, 
        Pagination,
        MyLoader,
    },
    methods: {
        searchMovies (search: string) {
            this.currentPage = 1;
            this.loadMovies(search, this.currentPage);
        },
        loadMoviesFn () {
            this.loadMovies(this.searchParam, this.currentPage);
        },
        pageButtonHandler () {
            this.$router.push({ path: '/movies', query: { param: this.searchParam, page: this.currentPage } });
            this.loadMoviesFn();
        },
        nextPage (){
            this.currentPage++;
            this.pageButtonHandler();
        },
        prevPage (){
            this.currentPage--;
            this.pageButtonHandler();
        },
    },
    mounted () {
        if(this.page && this.searchParam){
            this.currentPage = Number(this.page);
            this.loadMoviesFn();
        }
    },
    data (){
        return{
            page: computed(() => this.$route.query.page),
            searchParam: computed(() => this.$route.query.param as string),
        };
    }
};
</script>

<style scoped>
    .wrapper{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .text{
        width: 100%;
        font-size: 2rem;
        display: inline-block;
        text-align: center;
        font-weight: 500;
    }
</style>
