<template>
  <header class="container--fluid">
    <Navbar/>
  </header>
  <main class="container">
    <RouterView  />
  </main>
</template>

<script lang="ts">
import { RouterView } from 'vue-router';

import Navbar from '@/components/NavBar.vue';

export default {
    components: {
        RouterView,
        Navbar
    }
};
</script>
