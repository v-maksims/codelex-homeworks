<template>
    <div class="mt-5 mb-5">
        <h1 class="text-white text-center fw-bold text-capitalize">Random programming jokes</h1>
        <div class="row">
            <div v-for="joke in jokes">
                <JokeItem :joke="joke" />
            </div>
        </div>
        <button type="button" class="btn btn-primary mt-2 text-capitalize" @click="fetchJokes">New jokes</button>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import JokeItem from '@/components/JokeItem/JokeItem.vue';

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
}

type TFetchJokes = {
    amount: number;
    jokes: TJoke[];
    error: boolean;
}

export default {
    components: {
        JokeItem
    },
    mounted (){
        this.fetchJokes();
    },
    data () {
        return{
            jokes:  [] as TJoke[]
        };
    },
    methods:{
        fetchJokes () {
            axios.get<TFetchJokes>('https://v2.jokeapi.dev/joke/Programming?type=single&amount=10')
                .then(({ data }) => this.jokes = data.jokes)
                .catch((err) => console.log(err));
        }
    }
};

</script>