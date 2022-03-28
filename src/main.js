import { createApp } from 'vue';

/* axios */
import axios from 'axios';
import VueAxios from 'vue-axios';

/* boostrap */
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

// vue-loading-overlay
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(VueAxios, axios);

app.component('Loading', Loading);

app.use(router);
app.mount('#app');
