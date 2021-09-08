import { createRouter, createWebHistory } from 'vue-router'
import HalamanLogin from '../views/HalamanLogin.vue'
import HalamanRegister from '../views/HalamanRegister.vue'
import HalamanNotFound from '../views/NotFound.vue'
import FormLogin from '../components/FormLogin.vue'
import FormDaftar from '../components/FormDaftar.vue'

const routes = [
  {
    path: '/login',
    name: 'HalamanLogin',
    component: HalamanLogin
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
    path: '/:catchAll(.*)',
    component: HalamanNotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
