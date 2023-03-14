<template>
    <div class="skeleton__wrap">
        <div class="skeleton__main">
            <div class="skeleton__search" />
            <div class="skeleton__text" />
            <div class="skeleton__image" />
            <div class="skeleton__text" />
            <div class="skeleton__text" />
            <div class="skeleton__items-col">
                <div class="skeleton__text"/>
                <div class="skeleton__text"/>
            </div>
        </div>
        <div class="skeleton__info">
            <div class="skeleton__btn-list">
                <div class="skeleton__btn"/>
                <div class="skeleton__btn"/>
            </div>
            <div class="skeleton__text"/>
            <div class="skeleton__card-list">
                <div class="skeleton__card"/>
                <div class="skeleton__card"/>
                <div class="skeleton__card"/>
                <div class="skeleton__card"/>
                <div class="skeleton__card"/>
                <div class="skeleton__card"/>
                <div class="skeleton__card"/>
                <div class="skeleton__card"/>
                <div class="skeleton__card"/>
                <div class="skeleton__card"/>
                <div class="skeleton__card"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .skeleton__wrap{
        width: 100%;
        border-radius: 10px;
        display: grid;
        min-height: 450px;
        grid-template-columns: 30% 70%;
        overflow: hidden;
    }

    .skeleton__main{
        padding: 15px;
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
    }

    .skeleton__info{
        background-color: #f7f6f9;
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .skeleton__search{
        height: 100%;
        max-height: 35px;
        width: 100%;
        max-width: 255px;
        background-color: rgb(165, 165, 165);
        border-radius: 10px;
    }

    .skeleton__text{
        height: 24px;
        width: 100%;
        max-width: 150px;
        background-color: rgb(165, 165, 165);
    }
    
    .skeleton__image{
        width: 100%;
        height: 100%;
        max-width: 200px;
        max-height: 200px;
        background-color: rgb(165, 165, 165);
    }
    
    .skeleton__items-col{
        width: 100%;
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .skeleton__btn-list{
        display: flex;
        gap: 5px;
        justify-content: end;
    }
    
    .skeleton__btn{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: rgb(165, 165, 165);
    }

    .skeleton__card-list{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
    }

    .skeleton__card{
        width: 100%;
        border-radius: 10px;
        height: 100px;
        background-color: rgb(165, 165, 165);
    }

@media (max-width: 1010px) {
    .skeleton__card-list {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 650px) {
    .skeleton__card-list {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>