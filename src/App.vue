<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <!-- <router-link :to="{ name: 'HalamanLogin' }">Halaman Login</router-link>
  |
  <router-link :to="{ name: 'HalamanRegister' }">Halaman Daftar</router-link> | -->
  <loading v-if="isLoading"></loading>
  <router-view :theme="appTheme" />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  color: #444444;
  box-sizing: border-box;
}
</style>

<script>
import loading from "../src/components/UI/Loading.vue";

export default {
  components: {
    loading,
  },

  data: () => {
    return {
      appTheme: localStorage.getItem("theme"),
    };
  },

  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
};
</script>
