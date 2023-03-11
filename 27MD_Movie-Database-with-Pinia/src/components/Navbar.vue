<template>
    <nav class="navigation__wrap">
        <RouterLink to="/" class="navigation">Home</RouterLink>
        <RouterLink to="/movies" class="navigation">Movies</RouterLink>
    </nav>
</template>

<script lang="ts">

</script>

<style scoped>
    .navigation__wrap{
        display: flex;
        gap: 10px;
    }

    .navigation{
        text-decoration: none;
        color: aliceblue;
        font-size: 2rem;
        font-weight: 600;
        transition: color .2s;
    }

    .navigation:hover{
        color: rgb(1, 80, 7);
    }
</style>