<template>
    <div class="mb-2 p-2 text-center row align-items-center column-gap-3 justify-content-center">
        <span class="text-white col-2 border border-primary-subtle rounded-pill fw-bold">{{ joke.category }}</span>
        <div class="card col-7">
            <span>{{ joke.joke }}</span>
        </div>
        <button type="button" class="btn btn-secondary col-2 text-capitalize" @click="onClick">add to favorite</button>
    </div>
</template>

<script lang="ts">

import { PropType } from 'vue';

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
    props: {
        joke :{
            type: Object as PropType<TJoke>,
            required: true,
        }
    },
    data (){
        return {
        
        };
    },
    methods: {
        onClick () {
            console.log(this.joke.id);
        }
    }
};

</script>