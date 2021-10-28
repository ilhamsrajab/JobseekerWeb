import axios from "axios";

export default {
    async getDataProvince({ commit }, bearer) {
        const response = await axios.get("api/province", { 
            headers: { 
                authorization: bearer 
            }
        });
        commit('SET_DATA_DISTRICT', response.data.data);
        return response.data.data;
    },

    async getDataDistrict ({ commit }, bearer) {
        await axios.get("api/district", )
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