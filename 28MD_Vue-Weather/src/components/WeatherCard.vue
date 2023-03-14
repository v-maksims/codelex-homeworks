<template>
    <div class="card__wrap">
        <span class="card__text">{{ cardLabel }}</span>
        <div class="card__items">
            <span class="card__value">{{ typeof(cardValue) === 'number' ? cardValue.toFixed(0) : cardValue }}</span>
            <span v-if="cardUnit" class="card__unit">{{ cardUnit }}</span>
        </div>
    </div>
</template>

<script lang="ts">

export default {
    props: {
        cardLabel: {
            type: String,
            required: true,
        },
        cardValue: [String , Number],
        cardUnit: [String]
    }
};
</script>

<style scoped lang="scss">
    .card__wrap{
        padding: 10px;
        border-radius: 10px;
        background-color: #ffffff;
        min-height: 100px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .card__text{
        color: #c4c4c4;
    }

    .card__items{
        display: flex;
        gap: 5px;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    .card__value{
        font-size: 2rem;
        font-weight: 900;
    }

    .card__unit{
        font-size: 1.25rem;
    }

    
</style>