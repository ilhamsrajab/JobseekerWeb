import { createStore } from 'vuex';

import authModule from './modules/auth/index.js';
import jobSeekerModule from './modules/jobseeker/index.js';

const store = createStore({
    modules: {
        auth: authModule,
        jobSeeker: jobSeekerModule
    }
})

export default store;

