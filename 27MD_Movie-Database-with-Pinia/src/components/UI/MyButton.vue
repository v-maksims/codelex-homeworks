<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<style scoped>
    .button{
        font-size: 1.25rem;
        padding: 5px;
        border-radius: 5px;
        text-transform: capitalize;
        cursor: pointer;
        transition: scale .2s;
        background-color: rgb(2, 100, 2);
        color: aliceblue;
        border: 1px solid rgb(24, 134, 24);
    }

    .button:hover{
        scale: .9;
    }
</style>