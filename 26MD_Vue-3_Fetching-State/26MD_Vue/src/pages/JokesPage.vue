<template>
    <div class="mt-5 mb-5">
        <h1 class="text-white text-center fw-bold text-capitalize">Random programming jokes</h1>
        <JokeList :label="'add to favorite'" :jokes="jokes" @joke="addTofavorite"/>  
        <button type="button" class="btn btn-primary mt-2 text-capitalize" @click="getJokes">New jokes</button>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import JokeList from '@/components/JokeList/JokeList.vue';

type TFlags = {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
}

export type TJoke = {
    category: string;
    type: string;
    joke: string;
    flags: TFlags;
    id: number;
    safe: boolean;
    lang: string;
    _id?: string;
}

type TFetchJokes = {
    amount: number;
    jokes: TJoke[];
    error: boolean;
}


export type TFavoriteJoke = {
    joke: string;
    category: string;
    _id?: string;
}


export default {
    components: {
        JokeList
    },
    mounted (){
        this.getJokes();
    },
    data () {
        return{
            jokes:  [] as TJoke[]
        };
    },
    methods:{
        getJokes () {
            axios.get<TFetchJokes>('https://v2.jokeapi.dev/joke/Programming?type=single&amount=10')
                .then(({ data }) => this.jokes = data.jokes)
                .catch((err) => console.log(err));
        },
        addTofavorite (joke: TFavoriteJoke) {
            axios
                .post<{joke: string, categoty: string}>('http://localhost:3004/jokes', joke)
                .then(({ status }) => status === 201 && console.log('Joke success added to your favorites'))
                .catch(({ request }) => {
                    if(request.status === 409){
                        console.log('Joke exist in your favorites');
                        return;
                    }
                    console.log('Something went wrong');
                });
        }
    }
};

</script>