<template>
    <h1>movie {{ $route.params.id }}</h1>
</template>

<script lang="ts">
import { useMovieStore } from '@/stores/movieStore';

export default {
    setup () {
        const movie = useMovieStore();
        return {
        };
    }
};
</script>