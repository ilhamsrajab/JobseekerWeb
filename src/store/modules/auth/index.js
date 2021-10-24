import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      authStatus: false,
      data_user: [],
      data_diri: [],
      data_riwayat_pekerjaan: [],
      data_halaman_lowongan_kerja: [],
      data_lowongan_kerja: [],
      token: null,
    };
  },
  mutations,
  actions,
  getters
};

