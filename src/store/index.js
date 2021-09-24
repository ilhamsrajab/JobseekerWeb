import { createStore } from 'vuex';

import authModule from './auth.js';

const store = createStore({
    modules: {
        auth: authModule
    }
})

export default store;

