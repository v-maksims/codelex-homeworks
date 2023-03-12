<template>
    <div class="pagination">
        <MyButton 
            @click="prevPage" 
            :disabled="currentPage < 2"
        >
            prev
        </MyButton>
        <span>{{ currentPage }} / {{ pageCount }}</span>
        <MyButton 
            @click="nextPage" 
            :disabled="currentPage >= pageCount"
        >
            next
        </MyButton>
    </div>
</template>

<script lang="ts">
import MyButton from './UI/MyButton.vue';

export default {
    components: {
        MyButton
    },
    props: {
        currentPage: {
            type: Number,
            required: true,
        },
        pageCount: {
            type: Number,
            required: true,
        }
    },
    methods: {
        nextPage () {
            this.$emit('nextPage');
        },
        prevPage () {
            this.$emit('prevPage');
        }
    }
};
</script>

<style scoped>
    .pagination{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin: 25px 0;
    }
</style>