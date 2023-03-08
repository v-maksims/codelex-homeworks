<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-secondary">
      <div class="container-xxl">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link fs-4 fw-bold" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link fs-4 fw-bold" to="/jokes">Jokes</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link fs-4 fw-bold" to="/favorites">Favorites</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
</template>