<template>
    <h1 class="text-white text-center fw-bold" >Your favorites jokes:</h1>
    <JokeList 
        :label="'delete from favorites'" 
        :jokes="favorites" 
        @joke="deleteFavoriteJoke"
    />
</template>

<script lang="ts">
import { TFavoriteJoke } from '@/pages/JokesPage.vue';
import { createToaster } from '@meforma/vue-toaster';

import axios from 'axios';
import JokeList from '@/components/JokeList/JokeList.vue';

const toaster = createToaster({ 
    duration: 1000,
    position:'top-right',
    max: 3 
});

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
        deleteFavoriteJoke (joke: TFavoriteJoke) {
            axios.delete(`http://localhost:3004/jokes/${joke._id}`)
                .then(({ status }) => {
                    if(status === 200){
                        console.log('Joke success deleted from your favorites');
                        toaster.success('Joke success deleted from your favorites');
                        this.getFavoriteJokes();
                    }
                })
                .catch((err) => console.log(err));
        }
    }
};
</script>