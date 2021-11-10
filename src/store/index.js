import { createStore } from 'vuex';

import authModule from './modules/auth/index.js';
import addressModule from './modules/address/index.js';

const store = createStore({
    modules: {
        auth: authModule,
        address: addressModule,
    },
    state: {
        isLoading: false,
    },
    mutations: {
        isLoading(state, value) {
            state.isLoading = value
        }
    },
})

export default store;
''
''