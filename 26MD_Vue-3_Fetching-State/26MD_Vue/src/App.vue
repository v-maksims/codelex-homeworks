<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-secondary">
      <div class="container-xxl">
        <div class="collapse navbar-collapse" id="navbarNav">
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
      </div>
    </nav>
  </header>
  <main class="container">
      <RouterView />
  </main>
</template>
