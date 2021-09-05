<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import index from "./views/HalamanLogin.vue";
import register from "./views/register.vue";
</script>

<template>
  <!-- <index /> -->
  <register />
  <!-- <div id="nav"> -->
  <!-- <img src="./assets/logo.png" alt="" /> -->
  <!-- <router-link to="/">Login</router-link> | -->
  <!-- <router-link to="/register">Register</router-link> | -->
  <!-- </div> -->
  <!-- <router-view /> -->
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
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
