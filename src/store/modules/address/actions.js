export default {
    async getDataProvince ({ commit }) {
        await axios.get("api/province")
        .then( response => {
          commit('SET_DATA_PROVINCE', response.data)
        })
      },

    async getDataDistrict ({ commit }) {
        await axios.get("api/district")
        .then( response => {
            commit('SET_DATA_DISTRICT', response.data)
        })
    },

    async getDataSubDistrict ({ commit }) {
        await axios.get("api/subdistrict", response.data)
        .then( response => {
            commit('SET_DATA_SUB_DISTRICT',)
        })
    },
}