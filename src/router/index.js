import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '@/views/Welcome.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Welcome',
            component: Welcome,
        },
    ],
});

export default router;
