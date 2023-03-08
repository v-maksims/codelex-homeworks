<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <header>
    <NavigationList/>
  </header>
  <main class="container">
      <RouterView />
  </main>
</template>

<script lang="ts">
import NavigationList from '@/components/NavigationList/NavigationList.vue';

export default {
    components: {
        NavigationList
    }
};
</script>
