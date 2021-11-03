import { createRouter, createWebHistory } from 'vue-router'
import HalamanLandingPage from '../views/HalamanLandingPage.vue'
import HalamanHome from '../views/HalamanHome.vue'
import HalamanCariKerja from '../views/HalamanCariKerja.vue'
import HalamanFavorit from '../views/HalamanFavorit.vue'
import HalamanLogin from '../views/HalamanLogin.vue'
import HalamanDaftar from '../views/HalamanDaftar.vue'
import HalamanNotifikasi from '../views/HalamanNotifikasi.vue'
import Berkas from '../components/register/Berkas.vue'
import DataDiri from '../components/register/DataDiri.vue'
import MediaSosial from '../components/register/MediaSosial.vue'
import RiwayatPekerjaan from '../components/register/RiwayatPekerjaan.vue'
import Sukses from '../components/register/Sukses.vue'
import DaftarDataDiri from '../components/daftar/DataDiri.vue'
import DaftarBerkas from '../components/daftar/Berkas.vue'
import DaftarPernyataan from '../components/daftar/Pernyataan.vue'
import DaftarKirimLamaran from '../components/daftar/Sukses.vue'
import HalamanProfil from '../views/HalamanProfil.vue'
import HalamanJobDescription from '../views/HalamanJobDescription.vue'
import HalamanNotFound from '../views/NotFound.vue'
import Loading from '../components/UI/Loading.vue'
import store from '../store/index.js';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'HalamanHome',
      component: HalamanHome,
      // meta: { requiredAuth: true }
    },
    {
      path: '/landing-page',
      name: 'HalamanLandingPage',
      component: HalamanLandingPage,
      // meta: { requiredAuth: true }
    },
    {
      path: '/loker',
      name: 'HalamanCariKerja',
      component: HalamanCariKerja
    },
    {
      path: '/loker/:id',
      name: 'HalamanJobDescription',
      component: HalamanJobDescription,
      props: true,
      children: [
        { path: 'deskripsi', component: HalamanJobDescription }
      ]
      // meta: { requiredAuth: true }
    },
    // {
    //   path: '/deskripsi',
    //   name: 'HalamanJobDescription',
    //   component: HalamanJobDescription
    // },
    {
      path: '/favorit',
      name: 'HalamanFavorit',
      component: HalamanFavorit,
      // meta: { requiredAuth: true }
    },
    {
      path: '/masuk',
      name: 'HalamanLogin',
      component: HalamanLogin
    },
    {
      path: '/daftar',
      name: 'HalamanDaftar',
      component: HalamanDaftar
    },
    {
      path: '/notifikasi',
      name: 'HalamanNotifikasi',
      component: HalamanNotifikasi
    },
    {
      path: '/profil',
      name: 'HalamanProfil',
      component: HalamanProfil
    },
    {
      path: '/lengkapi-data-diri',
      name: 'DataDiri',
      component: DataDiri
    },
    {
      path: '/lengkapi-berkas',
      name: 'Berkas',
      component: Berkas
    },
    {
      path: '/lengkapi-media-sosial',
      name: 'MediaSosial',
      component: MediaSosial
    },
    {
      path: '/lengkapi-riwayat-pekerjaan',
      name: 'RiwayatPekerjaan',
      component: RiwayatPekerjaan
    },
    {
      path: '/sukses',
      name: 'Sukses',
      component: Sukses
    },
    {
      path: '/daftar-lengkapi-data-diri',
      name: 'DaftarDataDiri',
      component: DaftarDataDiri
    },
    {
      path: '/daftar-lengkapi-berkas',
      name: 'DaftarBerkas',
      component: DaftarBerkas
    },
    {
      path: '/daftar-lengkapi-pernyataan',
      name: 'DaftarPernyataan',
      component: DaftarPernyataan
    },
    {
      path: '/daftar-kirim-lamaran',
      name: 'DaftarKirimLamaran',
      component: DaftarKirimLamaran
    },
    {
      path: '/loading',
      name: 'Loading',
      component: Loading
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: HalamanNotFound
    }
  ]
});

// router.beforeEach(function(to, _, next) {
//   if (to.meta.requiredAuth && !store.getters.isAuthenticated) {
//     next('/login');
//   } else if (to.meta.requiredUnauth && store.getters.isAuthenticated) {
//     next('/');
//   } else {
//     next();
//   }
// }); 

export default router
