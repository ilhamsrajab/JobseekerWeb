import axios from 'axios'

export default {
    namespaced: true,

    state: {
        token: null,
        user: null,

    },

    mutations: {
        // SET_TOKEN (state, token) {
        //     state.token = token
        // },
    },

    actions: {
        async register ({ dispatch }, credentials) {
            let response = await axios.post('register', credentials)

            dispatch('attempt', response.data.token)

            console.log(response.data); 
        },

        async attempt (_,  ) {
            // await commit('SET_TOKEN', token)
            console.log(token);
        }
    }
}