<template>
    <div class="mt-5 mb-5">
        <h1 class="text-white text-center fw-bold text-capitalize">Random programming jokes</h1>
        <JokeList :jokes="jokes">
            <button type="button" class="btn btn-secondary col-2 text-capitalize" @click="onClick">add to favorite</button>
        </JokeList>
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

type TJoke = {
    category: string;
    type: string;
    joke: string;
    flags: TFlags;
    id: number;
    safe: boolean;
    lang: string;
}

type TFetchJokes = {
    amount: number;
    jokes: TJoke[];
    error: boolean;
}


type TPostJoke = {
    joke: string;
    category: string;
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
        postJokes (joke: TPostJoke) {
            axios.post('http://localhost:3004/jokes', joke);
        },
        onClick () {
            console.log('tap');
        }
    }
};

</script>