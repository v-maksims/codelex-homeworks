<template>
    <div class="mb-2 p-2 text-center row align-items-center column-gap-3 justify-content-center">
        <span class="text-white col-2 border border-primary-subtle rounded-pill fw-bold">{{ joke.category }}</span>
        <div class="card col-7 justify-content-center " style="height: 125px;">
            <span >{{ joke.joke }}</span>
        </div>
        <button type="button" class="btn btn-secondary col-2 text-capitalize" @click="onClick">{{ label }}</button>
    </div>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { TJoke } from '@/pages/JokesPage.vue';
import { TFavoriteJoke } from '@/pages/JokesPage.vue';

export default {
    props: {
        joke: {
            type: Object as PropType<TJoke | TFavoriteJoke>,
            required: true,
        },
        label: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            jokeData: { 
                joke: this.joke.joke, 
                category: this.joke.category, 
                _id: this.joke._id
            }
        };
    },
    methods: {
        onClick () {
            this.$emit('joke', this.jokeData);
        }
    }
};

</script>