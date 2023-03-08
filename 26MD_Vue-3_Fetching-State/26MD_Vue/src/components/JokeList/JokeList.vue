<template>
    <div class="row">
        <div v-for="joke in jokes">
            <JokeItem :label="label" :joke="joke" @joke="onClick"/>
        </div>
    </div>
</template>

<script lang="ts">
import { PropType } from 'vue';
import JokeItem from '../JokeItem/JokeItem.vue';
type TFavoriteJoke = {
    category: string;
    joke: string;
    _id: string;
}

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

export default {
    components: {
        JokeItem
    },
    props: {
        jokes: {
            type: Object as PropType<TJoke[] | TFavoriteJoke[]>,
            required: true,
        },
        label: {
            type: String,
            required: true
        }
    },
    methods: {
        onClick (joke: {joke: string, categoty: string, _id: string}) {
            this.$emit('joke', joke);
        }
    }
};
</script>