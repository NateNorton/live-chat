import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { projectAuth } from './firebase/config';

let app;
projectAuth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App);

        app.use(router);

        app.mount('#app');
    }
});
