<template>
    <div class="row">
        <div v-for="joke in jokes" :key="joke.joke">
            <JokeItem 
                :label="label" 
                :joke="joke" 
                @joke="onClick"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { TJoke } from '@/pages/JokesPage.vue';
import { TFavoriteJoke } from '@/pages/JokesPage.vue';

import JokeItem from '../JokeItem/JokeItem.vue';

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
        onClick (joke: TFavoriteJoke) {
            this.$emit('joke', joke);
        }
    }
};
</script>