<template>
  <div
    class="
      fixed
      z-30
      inset-y-0
      left-0
      w-72
      transition
      duration-300
      transform
      lg:shadow-none
      md:shadow-btnhover
      bg-white
      dark:bg-gray-900
      overflow-y-auto
      xl:translate-x-0 xl:static xl:inset-0
    "
  >
    <!-- logo -->
    <div class="flex items-center justify-center py-5 bg-primary">
      <div class="flex items-center">
        <a href="/">
          <img
            src="../../assets/images/logo/BursaKerjaLogotype_Black.svg"
            alt=""
            class="h-8"
          />
        </a>
      </div>
    </div>
    <!-- end of logo -->

    <!-- navigasi sidebar -->
    <nav class="flex flex-col mt-4 px-4 text-center">
      <!-- home -->
      <router-link :to="{ name: 'HalamanHome' }">
        <button-sidebar @click="setSelectedTab('home')" :mode="homeButtonMode">
          <Icon
            icon="fluent:home-24-filled"
            :inline="true"
            class="text-xl mr-3"
          />Home
          <!-- {{ getusers.data.id }} -->
        </button-sidebar>
      </router-link>
      <!-- end of home -->

      <!-- cari kerja -->
      <router-link :to="{ name: 'HalamanCariKerja' }">
        <button-sidebar
          @click="setSelectedTab('cari-kerja')"
          :mode="cariKerjaButtonMode"
        >
          <Icon
            icon="fluent:search-24-filled"
            :inline="true"
            class="text-xl mr-3"
          />Cari Kerja
        </button-sidebar>
      </router-link>
      <!-- end of cari kerja -->

      <!-- favorite -->
      <router-link :to="{ name: 'HalamanFavorit' }">
        <button-sidebar
          @click="setSelectedTab('favorite')"
          :mode="favoriteButtonMode"
        >
          <Icon
            icon="fluent:bookmark-24-filled"
            :inline="true"
            class="text-xl mr-3"
          />Favorit</button-sidebar
        >
      </router-link>
    </nav>
    <!-- end of favorite -->

    <!-- profil icon -->
    <nav
      class="
        group
        mt-10
        px-4
        w-full
        absolute
        bottom-0
        pb-2
        cursor-default
        border-t
        dropdown dropdown-top
        dark:border-gray-800
        hover:bg-gray-50
        dark:hover:bg-gray-900
        transition-all
        duration-200
      "
    >
      <div tabindex="0" class="flex items-center mt-2 py-4 cursor-pointer">
        <img
          alt="avatar"
          class="
            w-14
            rounded-full
            select-disabled
            group-hover:rotate-3
            transform
          "
          src="../../assets/images/avatar.png"
        />
        <div class="leading-6 ml-4 select-disabled bg-opacity-0">
          <h4 class="font-semibold dark:text-white dark:text-opacity-80">
            {{ getDataDiri.nama }}
          </h4>
          <h5
            id="email"
            class="text-gray-500 text-xs dark:text-white dark:text-opacity-60"
          >
            <!-- {{ getDataUser.email }} -->
          </h5>
        </div>
      </div>

      <!-- dropdown -->
      <ul
        tabindex="0"
        class="
          bg-white
          my-4
          p-2
          shadow-xl
          menu
          dropdown-content
          bg-none bg-opacity-20
          border
          rounded-box
          w-64
          text-sm
          space-y-1
          hover:dark:bg-white
          dark:bg-gray-800 dark:border-gray-900 dark:text-white
          dropdown-content
        "
      >
        <li
          class="
            px-5
            py-3
            rounded-large
            dark:text-white dark:text-opacity-80 dark:hover:bg-opacity-20
            hover:bg-gray-100 hover:text-opacity-80
            transition-all
            duration-200
          "
        >
          <router-link :to="{ name: 'HalamanProfil' }">
            <Icon
              icon="fluent:person-24-filled"
              :inline="true"
              class="text-xl mr-3"
            />
            <span> Profil </span>
          </router-link>
        </li>
        <li
          class="
            rounded-large
            px-5
            py-3
            dark:text-white dark:text-opacity-80 dark:hover:bg-opacity-20
            hover:bg-red-100 hover:text-opacity-80
            dark:hover:bg-red-300
            transition-all
            duration-200
          "
        >
          <a class="text-red-500 dark:text-red-300">
            <Icon
              icon="fluent:sign-out-24-filled"
              :inline="true"
              class="text-xl mr-3"
            />
            <span @click="logout"> Keluar </span>
          </a>
        </li>
      </ul>
    </nav>
    <!-- end of profil icon -->
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import ButtonSidebar from "../UI/ButtonSidebar.vue";
import axios from "axios";

export default {
  components: {
    Icon,
    ButtonSidebar,
  },
  data() {
    return {
      selectedTab: "home",
      dataUser: null,
      dataDiri: null,
    };
  },
  created() {
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("token");
    this.dataUser = this.$store.dispatch("auth/getDataUser");
    this.dataDiri = this.$store.dispatch("auth/getDataDiri");
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.replace("/masuk");
    },
  },
  computed: {
    homeButtonMode() {
      return this.selectedTab === "home" ? null : "btnSidebarDisable";
    },
    cariKerjaButtonMode() {
      return this.selectedTab === "cari-kerja" ? null : "btnSidebarDisable";
    },
    favoriteButtonMode() {
      return this.selectedTab === "favorite" ? null : "btnSidebarDisable";
    },
    getDataUser() {
      return this.$store.getters["auth/data_user"];
    },
    getDataDiri() {
      return this.$store.getters["auth/data_diri"];
    },
  },
  // methods: {
  //   async loadJobSeeker() {
  //     this.isLoading = true;
  //     try {
  //       await this.$store.dispatch("jobSeeker/fetchJobSeeker");
  //     } catch (error) {
  //       this.error = error.message || "Something failed!";
  //     }
  //     this.isLoading = false;
  //   },
  //   handleError() {
  //     this.error = null;
  //   },
  // },
  // mounted() {
  //   this.$store.dispatch("jobSeeker/fetchJobSeeker");
  // },
  // created() {

  // },
};
</script>

<style scoped>
* {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
