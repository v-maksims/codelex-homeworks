<template>
    <form 
        class="search-bar__form"
        @submit.prevent="searchFn"
    >
        <MyInput 
            v-model:value="search" 
            placeholder="Search movie"
        />
        <MyButton>search</MyButton>
    </form>   
</template>

<script lang="ts">
import MyButton from './UI/MyButton.vue';
import MyInput from './UI/MyInput.vue';

export default {
    components: {
        MyInput, MyButton
    },
    data (){
        return{
            search: ''
        };
    },
    methods: {
        searchFn () {
            this.$router.push({ path: '/movies', query: { param: this.search, page: 1 } });
            this.$emit('search', this.search);
            this.search = '';
        }
    }
};
</script>

<style scoped>
    .search-bar__form {
        display: flex;
        gap: 10px;
        justify-content: end;
    }
</style>