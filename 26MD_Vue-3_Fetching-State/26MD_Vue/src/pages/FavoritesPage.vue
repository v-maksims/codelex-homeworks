<template>
    <h1 class="text-white" >Favorites page</h1>
    <JokeList :jokes="favorites" :label="'delete from favorites'" @joke="deleteFavoriteJoke"/>
</template>

<script lang="ts">
import axios from 'axios';
import JokeList from '@/components/JokeList/JokeList.vue';
import { TFavoriteJoke } from '@/pages/JokesPage.vue';

export default {
    components: {
        JokeList
    },
    mounted () {
        this.getFavoriteJokes();
    },
    data (){
        return{
            favorites: [] as TFavoriteJoke[]
        };
    },
    methods: {
        getFavoriteJokes () {
            axios.get<TFavoriteJoke[]>('http://localhost:3004/jokes')
                .then(({ data, status }) => {
                    this.favorites = data; 
                    if(status === 200){
                        console.log('Favorite jokes success loaded');
                    }
                })
                .catch((err) => console.log(err));
        },
        deleteFavoriteJoke (joke: {joke: string, categoty: string, _id: string}) {
            axios.delete(`http://localhost:3004/jokes/${joke._id}`)
                .then(({ status }) => {
                    if(status === 200){
                        console.log('Joke success deleted from your favorites');
                        this.getFavoriteJokes();
                    }
                })
                .catch((err) => console.log(err));
        }
    }
};
</script>