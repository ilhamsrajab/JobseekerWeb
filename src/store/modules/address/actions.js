import axios from "axios";

export default {
    async getDataProvince({ commit }, bearer) {
        const response = await axios.get("api/province", { 
            headers: { 
                authorization: bearer 
            }
        });
        commit('SET_DATA_PROVINCE', response.data.data);
        return response.data.data;
    },

    async getDataDistrictsOnProvince ({ commit }, {bearer, id}) {
        const response = await axios.get(`api/province/${id}/districts`, {
            headers: {
                authorization: bearer
            }
        });
        commit('SET_DATA_DISTRICTS_ON_PROVINCE', response.data.data.districts);
        
    },

    async getDataSubDistrictOnDistrict ({ commit }, {bearer, id}) {
        const response = await axios.get(`api/district/${id}/subdistricts`, {
            header: {
                authorization: bearer
            }
        });
        commit('SET_DATA_SUB_DISTRICT_ON_DISTRICT', response.data.data.sub_district);
      
    },
    
}