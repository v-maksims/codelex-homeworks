import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import JokesPage from '@/pages/JokesPage.vue';
import FavoritesPage from '@/pages/FavoritesPage.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/jokes',
            name: 'jokes',
            component: JokesPage
        },
        {
            path: '/favorites',
            name: 'favorites',
            component: FavoritesPage
        }
    ]
});

export default router;
