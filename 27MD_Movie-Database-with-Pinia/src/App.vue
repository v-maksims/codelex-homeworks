<script lang="ts" setup>
import { RouterView } from 'vue-router';
</script>

<template>
    <header>
        <Error/>
        <div class="container--fluid">
            <Navbar />
        </div>
    </header>
    <main class="container">
        <RouterView  />
    </main>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue';
import Error from './components/Error.vue';

export default {
    components: {
        Navbar, Error
    }
};
</script>