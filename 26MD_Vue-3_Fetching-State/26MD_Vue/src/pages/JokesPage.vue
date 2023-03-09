<template>
    <div class="form-floating">
        <select v-model="category" @change="getJokes(category)" class="form-select" id="floatingSelect" aria-label="Floating label select example">
            <option v-for="category in categories">{{ category }}</option>
        </select>
        <label for="floatingSelect">Choice joke category</label>
    </div>
    <div class="mt-5 mb-5">
        <h1 class="text-white text-center fw-bold text-capitalize">Random {{ category }} jokes</h1>
        <JokeList :label="'add to favorite'" :jokes="jokes" @joke="addTofavorite" />
        <button type="button" class="btn btn-primary mt-2 text-capitalize" @click="getJokes(category)">New jokes</button>
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

type TFetchJokes = {
    amount: number;
    jokes: TJoke[];
    error: boolean;
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

export type TFavoriteJoke = {
    joke: string;
    category: string;
    _id?: string;
}

export default {
    components: {
        JokeList
    },
    mounted () {
        this.getJokes(this.category);
    },
    data () {
        return {
            categories: ['Programming','Misc','Dark','Pun'],
            category: 'Programming',
            jokes: [] as TJoke[]
        };
    },
    methods: {
        getJokes (category: string) {
            axios.get<TFetchJokes>(`https://v2.jokeapi.dev/joke/${category}?type=single&amount=10`)
                .then(({ data }) => this.jokes = data.jokes)
                .catch((err) => console.log(err));
        },
        addTofavorite (joke: TFavoriteJoke) {
            axios
                .post<{ joke: string, categoty: string }>('http://localhost:3004/jokes', joke)
                .then(({ status }) => status === 201 && console.log('Joke success added to your favorites'))
                .catch(({ request }) => {
                    if (request.status === 409) {
                        console.log('Joke exist in your favorites');
                        return;
                    }
                    console.log('Something went wrong');
                });
        }
    }
};

</script>