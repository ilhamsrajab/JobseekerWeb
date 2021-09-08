// import { createApp } from 'vue'
import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './App.vue'
import router from './router/'

import './assets/tailwind.css'


createApp(App).use(router).mount('#app')
// createApp(App).mount('#app')
