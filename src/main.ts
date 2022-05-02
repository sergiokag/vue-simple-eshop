import { createApp } from 'vue'
import App from './app/App.vue';
import router from './app/router/index';

const app = createApp(App);

app
    .use(router)
    .mount('#app');
