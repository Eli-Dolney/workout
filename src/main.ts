import { createApp } from 'vue';
import { createPinia } from 'pinia'; // Import Pinia
import App from './App.vue';
import router from './router';
import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App);
const pinia = createPinia(); // Create a Pinia instance

app.use(pinia); // Register Pinia with the app
app.use(router);
app.mount('#app');