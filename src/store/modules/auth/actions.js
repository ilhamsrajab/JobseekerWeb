import axios from "axios";

export default {
  login( _, user ) {
      // axios.get('sanctum/csrf-cookie').then(response => {
        axios.post('api/login', {
        email: user.email,
        password: user.password
      }).then( response => {
        // console.log(response.data.data.access_token)
        if( response.data.data.access_token ) {
          
          localStorage.setItem(
            "token",
            response.data.data.access_token
          )

          window.location.replace('/')
        }
      // })
    });
  },
  register( _, user ) {
    // axios.get('sanctum/csrf-cookie').then(response => {
        axios.post('api/register', {
        username: user.username,
        email: user.email,
        password: user.password,
        password_confirmation: user.password_confirmation,
        role: user.role
      }).then( response => {
        // console.log(response.data)
        window.location.replace('/lengkapi-data-diri')
    // })
  });
  },
  logout() {
    localStorage.removeItem('token')
  },
  
  async getDataUser ({ commit }) {
    await axios.get("api/get_job_seeker_data_diri")
    .then( response => {
      commit('SET_DATA_USER', response.data.data.users)
    })
  },
  
  async getDataDiri({ commit }) {
    await axios.get("api/get_job_seeker_data_diri")
    .then( response => {
      commit('SET_DATA_DIRI', response.data.data)
    })
  },

  async getDataRiwayatPekerjaan ({ commit }) {
    await axios.get('api/get_job_seeker_data_diri')
    .then( response => {
      commit('SET_DATA_RIWAYAT_PEKERJAAN', response.data.data.riwayat_pekerjaan)
    })
  }
}

    // async register(context, payload) {
    //   const response = await fetch('http://127.0.0.1:8000/api/register', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       username: payload.username,
    //       email: payload.email,
    //       password: payload.password,
    //       password_confirmation: payload.password_confirmation,
    //       role: payload.role,
    //     }),
    //   });
  
    //   const responseData = await response.json();
  
    //   if (!response.ok) {
    //     console.log(responseData);
    //     const error = new Error(responseData.message || 'Failed to authenticate.');
    //     throw error;
    //   }
  
    //   console.log(responseData);
    //   context.commit('setUser', {
    //     token: responseData.token,
    //     // userId: responseData.localId,
    //     // tokenExpiration: responseData.expiresIn
    //   });
    // },

    // logout(context) {
    //   context.commit('setUser', {
    //     token: null
    //   });
    // }
