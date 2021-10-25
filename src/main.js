// import { createApp } from 'vue'
import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './App.vue'
import router from './router/'
import store from './store/index.js';
import axios from 'axios';

import './assets/tailwind.css'

const app = createApp(App)

// axios.defaults.baseURL = 'http://127.0.0.1:8000/';
axios.defaults.baseURL = 'http://192.168.183.53:8000/';

app.use(router);
app.use(store);

app.mount('#app');
// createApp(App).mount('#app')

const appTheme = localStorage.getItem('theme');

// Check what is the active theme
if (
  appTheme === 'dark' &&
  document.querySelector('body').classList.contains('app-theme')
) {
  document.querySelector('body').classList.add('dark');
} else {
  document.querySelector('body').classList.add('light');
}
