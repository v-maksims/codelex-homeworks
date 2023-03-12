<template>
    <div class="error__wrap" v-if="isError">
        <span class="error">{{ errorMessage }}</span>
        <button class="error__btn" @click="clearError">X</button>
    </div>
</template>

<script lang="ts">
import { useMovieStore } from '@/stores/movieStore';
import { computed } from 'vue';



export default {
    setup () {
        const movieStore = useMovieStore();
        return {
            errorMessage: computed(() => movieStore.errorMessage),
            isError: computed(() => movieStore.isError),
            clearError: movieStore.clearError
        };
    }
};
</script>

<style scoped>
    .error__wrap{
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        gap: 10px;
    }

    .error__wrap:last-child {
        align-self: start;
    }

    .error{
        color: aliceblue;
        font-size: 1.5rem;
    }

    .error__btn{
        background-color: transparent;
        font-size: 1.5rem;
        border: none;
        color: aliceblue;
        cursor: pointer;
        justify-self: end;
    }

</style>