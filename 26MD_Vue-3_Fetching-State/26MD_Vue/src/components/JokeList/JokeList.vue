<template>
    <div class="row">
        <div v-for="joke in jokes">
            <JokeItem :joke="joke">
                <slot></slot>
            </JokeItem>
        </div>
    </div>
</template>

<script lang="ts">
import { PropType } from 'vue';
import JokeItem from '../JokeItem/JokeItem.vue';

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
            type: Object as PropType<TJoke[]>,
            required: true,
        }
    }
};
</script>