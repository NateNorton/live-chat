import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '@/views/Welcome.vue';
import Chatroom from '@/views/Chatroom.vue';
import { projectAuth } from '../firebase/config';

// auth guard
const requireAuth = (to, from, next) => {
    let user = projectAuth.currentUser;
    if (!user) {
        next({ name: 'Welcome' });
    } else {
        next();
    }
};

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Welcome',
            component: Welcome,
        },
        {
            path: '/chatroom',
            name: 'Chatroom',
            component: Chatroom,
            beforeEnter: requireAuth,
        },
    ],
});

export default router;
