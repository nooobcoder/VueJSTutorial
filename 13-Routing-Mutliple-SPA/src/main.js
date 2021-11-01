import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router); // Registering the router middleware to the configuration

app.mount('#app');
