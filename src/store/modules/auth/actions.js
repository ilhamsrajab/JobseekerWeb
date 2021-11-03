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
    // register( _, user ) {
    //     // axios.get('sanctum/csrf-cookie').then(response => {
    //       axios.post('api/register', {
    //       username: user.username,
    //       email: user.email,
    //       password: user.password,
    //       password_confirmation: user.password_confirmation,
    //       role: user.role
    //     }).then( response => {
    //     console.log(response.data)
    //       if( response.data.data.access_token ) {
            
    //         localStorage.setItem(
    //           "token",
    //           response.data.data.access_token
    //         )

    //         // window.location.replace('/lengkapi-data-diri')
    //       }
    //       // })
    //   });
    // },

    logout() {
      localStorage.removeItem('token')
    },

    async register({ commit }, user ) {
      const response = await axios.post('api/register', user, {
      }); 
      if( response.data.data.access_token ) { 
        localStorage.setItem(
          "token",
          response.data.data.access_token
        )
        // window.location.replace('/lengkapi-data-diri')
      }
    },

    async register_data_diri({ commit }, user ) {
      const response = await axios.post('api/job_seeker_data_diri', user, {
      }); 
    },

    async register_foto_profil({ commit }, formData ) {
      const response = await axios.post('api/job_seeker_foto_profil', formData, {
        'content-type': 'multipart/form-data'
      });
    },

    async register_foto_ktp( { commit }, formData ) {
      const response = await axios.post('api/job_seeker_foto_ktp', formData, {
        'content-type': 'multipart/form-data'
      });
    },
    
    async register_data_media_sosial({ commit }, user ) {
      const response = await axios.post('api/job_seeker_data_media_sosial', user, {
      }); 
    },

    async register_riwayat_pekerjaan({ commit }, user ) {
      const response = await axios.post('api/job_seeker_riwayat_pekerjaan', user, {
      }); 
    },

    async register_curriculum_vitae({ commit }, user ) {
      const response = await axios.post('api/job_seeker_cv', user, {
      }); 
    },

    async register_ijazah({ commit }, user ) {
      const response = await axios.post('api/job_seeker_ijazah', user, {
      }); 
    },

    async register_portofolio({ commit }, user ) {
      const response = await axios.post('api/job_seeker_portofolio', user, {
      }); 
    },

    async register_sertifikat({ commit }, user ) {
      const response = await axios.post('api/job_seeker_sertifikat', user, {
      }); 
    },

    async register_transkip_nilai({ commit }, user ) {
      const response = await axios.post('api/job_seeker_transkip_nilai', user, {
      }); 
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
    },

    async getDataHalamanLowonganKerja ({ commit }) {
      await axios.get('api/lowongan_kerja')
      .then( response =>  {
        commit('SET_DATA_HALAMAN_LOWONGAN_KERJA', response.data.data)
      })
    },

    async getDataLowonganKerja ({ commit }) {
      await axios.get('api/lowongan_kerja')
      .then( response =>  {
        commit('SET_DATA_LOWONGAN_KERJA', response.data.data.data)
      })
    },
  }

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
