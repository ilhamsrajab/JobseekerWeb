<template>
  <header class="flex justify-between items-center px-6 py-4 bg-primary">
    <div class="flex items-center space-x-4 xl:space-x-0">
      <!-- logo -->
      <!-- logotype -->
      <div class="flex items-center xs:hidden lg:inline-flex">
        <a href="/" class="lg:mr-4 xl:mr-16">
          <img
            src="../../assets/images/logo/BursaKerjaLogotype_Black.svg"
            alt=""
            class="h-8"
          />
        </a>
      </div>
      <!-- logomark -->
      <div class="flex items-center sm:inline-flex lg:hidden xl:hidden">
        <a href="/" class="lg:mr-4 xl:mr-16">
          <img
            src="../../assets/images/logo/BursaKerjaLogomark_Black.svg"
            alt=""
            class="xs:h-5 sm:h-6"
          />
        </a>
      </div>
      <!-- search bar -->
      <div class="relative flex flex-row">
        <input
          class="
            searchbar
            h-10
            sm:px-5 sm:pr-10
            xs:px-5 xs:pr-7
            md:w-96
            sm:w-80
            xs:w-0
            rounded-large
            text-sm
            border-0
            hover:shadow-soft
            focus:ring-secondary focus:ring-opacity-80 focus:shadow-soft
            transition-all
            duration-200
            dark:focus:ring-primary
            dark:bg-gray-800
            dark:text-white
            dark:text-opacity-60
          "
          type="search"
          name="search"
          placeholder="Cari perusahaan atau kategori"
        />
        <button
          type="submit"
          class="
            absolute
            right-0
            top-0
            mt-3
            mr-4
            text-neutral
            dark:text-gray-500 dark:focus:text-gray-400
          "
        >
          <Icon icon="fluent:search-28-filled" :inline="true" />
        </button>
      </div>
    </div>

    <!--  dark mode -->
    <div class="flex items-center space-x-4">
      <!-- light mode -->
      <div
        class="group flex items-center"
        v-show="modeCerah"
        v-on:Click="lightMode"
      >
        <span
          class="
            text-xs text-white
            mr-2
            opacity-0
            md:group-hover:opacity-100
            cursor-pointer
            transition-all
            duration-200
          "
          >Light Mode</span
        >
        <button
          class="
            px-1
            py-1
            group-hover:bg-accent group-hover:shadow-glow
            rounded-full
            transition-all
            duration-200
          "
        >
          <Icon
            icon="fluent:weather-sunny-24-filled"
            class="text-xl text-white group-hover:text-neutral"
          />
        </button>
      </div>
      <!-- end of light mode -->

      <!-- dark mode -->
      <div
        class="group flex items-center"
        v-show="modeGelap"
        v-on:Click="darkMode"
      >
        <span
          class="
            text-xs text-white
            mr-2
            opacity-0
            md:group-hover:opacity-100
            cursor-pointer
            transition-all
            duration-200
          "
          >Dark Mode</span
        >
        <button
          class="
            px-1
            py-1
            group-hover:bg-accent group-hover:shadow-glow
            rounded-full
            transition-all
            duration-200
          "
        >
          <Icon
            icon="fluent:weather-moon-24-filled"
            class="text-xl text-white group-hover:text-neutral"
          />
        </button>
      </div>
      <!-- end of dark mode -->

      <!-- login button -->
      <router-link :to="{ name: 'HalamanLogin' }">
        <button
          class="
            bg-accent
            text-neutral
            font-bold
            border-0
            sm:h-10 sm:w-28
            xs:h-8 xs:w-20
            rounded-large
            shadow-lg
            hover:shadow-xl hover:bg-accentDark
            transition-all
            duration-200
            normal-case
          "
        >
          Login
        </button>
      </router-link>
      <!-- login button -->
    </div>
  </header>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
  data() {
    return {
      modeCerah: false,
      modeGelap: true,
    };
  },
  methods: {
    lightMode() {
      this.modeCerah = false;
      this.modeGelap = true;
    },
    darkMode() {
      this.modeCerah = true;
      this.modeGelap = false;
    },
  },
};
</script>

<style scoped>
* {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.searchbar:focus {
  width: 30rem;
}

@media only screen and (max-width: 767px) {
  .searchbar:focus {
    width: 22rem;
  }
}

@media only screen and (max-width: 600px) {
  .searchbar {
    width: 15rem;
  }
  .searchbar:focus {
    width: 18rem;
  }
}

@media only screen and (max-width: 480px) {
  .searchbar {
    width: 3rem;
  }
  .searchbar:focus {
    width: 11rem;
  }
}
</style>
