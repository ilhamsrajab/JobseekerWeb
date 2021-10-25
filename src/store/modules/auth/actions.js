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

  register_data_diri(_, post_data_diri) {
    axios.post('api/job_seeker_data_diri', {
      nama: post_data_diri.nama,
      nik: post_data_diri.nik,
      jenis_kelamin: post_data_diri.jenis_kelamin,
      tempat_lahir: post_data_diri.tempat_lahir,
      tanggal_lahir: post_data_diri.tanggal_lahir,
      status_perkawinan: post_data_diri.status_perkawinan,
      agama: post_data_diri.agama,
      desa: post_data_diri.desa,
      rt: post_data_diri.rt,
      rw: post_data_diri.rw,
      alamat_rumah: post_data_diri.alamat_rumah,
      kode_pos: post_data_diri.kode_pos,
      pendidikan_terakhir: post_data_diri.pendidikan_terakhir,
      no_hp: post_data_diri.no_hp
    }).then( response => {

    })
  },

  register_media_sosial(_, post_data_media_sosial) {
    axios.post('api/job_seeker_data_media_sosial', {
      instagram: post_data_media_sosial.instagram,
      twitter: post_data_media_sosial.twitter,
      facebook: post_data_media_sosial.facebook,
      linkedin: post_data_media_sosial.linkedin,
      youtube: post_data_media_sosial.youtube
    })
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
