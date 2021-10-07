import { createRouter, createWebHistory } from 'vue-router'
import HalamanHome from '../views/HalamanHome.vue'
import HalamanCariKerja from '../views/HalamanCariKerja.vue'
import HalamanFavorit from '../views/HalamanFavorit.vue'
import HalamanLogin from '../views/HalamanLogin.vue'
import HalamanRegister from '../views/HalamanRegister.vue'
import HalamanProfil from '../views/HalamanProfil.vue'
import HalamanJobDescription from '../views/HalamanJobDescription.vue'
import HalamanNotFound from '../views/NotFound.vue'
import Loading from '../views/Loading.vue'
import FormLogin from '../components/Form/FormLogin.vue'
import FormDaftar from '../components/Form/FormDaftar.vue'
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
      path: '/carikerja',
      name: 'HalamanCariKerja',
      component: HalamanCariKerja,
      // meta: { requiredAuth: true }
    },
    {
      path: '/deskripsi',
      name: 'HalamanJobDescription',
      component: HalamanJobDescription
    },
    {
      path: '/favorit',
      name: 'HalamanFavorit',
      component: HalamanFavorit,
      // meta: { requiredAuth: true }
    },
    {
      path: '/login',
      name: 'HalamanLogin',
      component: HalamanLogin
    },
    {
      path: '/profil',
      name: 'HalamanProfil',
      component: HalamanProfil
    },
    {
      path: '/login',
      name: 'FormLogin',
      component: FormLogin
    },
    {
      path: '/login',
      name: 'FormDaftar',
      component: FormDaftar
    },
    {
      path: '/daftar',
      name: 'HalamanRegister',
      component: HalamanRegister
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
