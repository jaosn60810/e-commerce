import { createApp } from 'vue';

/* axios */
import axios from 'axios';
import VueAxios from 'vue-axios';

/* boostrap */
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(VueAxios, axios);

app.use(router);
app.mount('#app');
