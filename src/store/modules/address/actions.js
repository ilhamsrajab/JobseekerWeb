import axios from "axios";

export default {
    async getDataProvince ({ commit }) {
        await axios.get("api/province")
        .then( response => {
          commit('SET_DATA_PROVINCE', response.data.data)
        })
      },

    async getDataDistrict ({ commit }) {
        await axios.get("api/district")
        .then( response => {
            commit('SET_DATA_DISTRICT', response.data.data)
        })
    },

    async getDataSubDistrict ({ commit }) {
        await axios.get("api/subdistrict")
        .then( response => {
            commit('SET_DATA_SUB_DISTRICT', response.data.data)
        })
    },
}