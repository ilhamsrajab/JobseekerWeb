// import { createApp } from 'vue'
import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './App.vue'
import router from './router/'
import store from './store/index.js';
import axios from 'axios';

import './assets/tailwind.css'

const app = createApp(App)

axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

app.use(router);
app.use(store);

app.mount('#app');
// createApp(App).mount('#app')
