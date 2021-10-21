import { createStore } from 'vuex';

import authModule from './modules/auth/index.js';
import addressModule from './modules/address/index.js';
import jobSeekerModule from './modules/jobseeker/index.js';

const store = createStore({
    modules: {
        auth: authModule,
        address: addressModule,
        jobSeeker: jobSeekerModule
    }
})

export default store;

