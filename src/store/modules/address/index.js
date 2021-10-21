import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            data_province: null,
            data_district: null,
            data_sub_district: null,
        }
    },
    actions,
    mutations,
    getters,
}