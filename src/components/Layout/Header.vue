<template>
  <header class="flex justify-between items-center px-6 py-4 bg-primary">
    <div class="flex items-center space-x-4 lg:space-x-0">
      <!-- hamburger menu -->
      <button
        @click="sidebarOpen = true"
        class="text-gray-500 dark:text-gray-300 focus:outline-none lg:hidden"
      >
        <svg
          class="h-6 w-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 12H20M4 18H11"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <!-- logo -->
      <div class="flex items-center lg:hidden">
        <a href="/" class="mr-16">
          <span
            class="dark:text-white text-white text-2xl font-bold select-none"
            >BursaKerja</span
          >
        </a>
      </div>
      <!-- search bar -->
      <div class="relative flex flex-row">
        <input
          class="
            searchbar
            h-10
            px-5
            pr-10
            w-96
            rounded-large
            text-sm
            border-0
            hover:shadow-soft
            focus:ring-secondary focus:ring-opacity-80 focus:shadow-soft
            transition-all
            duration-200
            dark:focus:ring-primary dark:bg-gray-800 dark:text-gray-400
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

    <!-- button notifikasi dan dark mode -->
    <div class="flex items-center space-x-4">
      <!-- light mode -->
      <div
        class="group flex items-center"
        v-show="modeCerah"
        v-on:Click="lightMode"
      >
        <span class="text-xs text-white mr-2 display cursor-pointer"
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

      <!-- dark mode -->
      <div
        class="group flex items-center"
        v-show="modeGelap"
        v-on:Click="darkMode"
      >
        <span class="text-xs text-white mr-2 display cursor-pointer"
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

      <!-- notifikasi -->
      <div class="group flex items-center dropdown">
        <button
          tabindex="1"
          class="
            indicator
            px-1
            py-1
            group-hover:bg-accent group-hover:shadow-glow
            rounded-full
            transition-all
            duration-200
          "
        >
          <!-- indicator -->
          <span
            class="
              w-2
              h-2
              bg-accent
              absolute
              top-0
              right-0
              rounded-full
              shadow-lg
            "
          ></span>
          <Icon
            icon="fluent:alert-24-filled"
            class="text-xl text-white group-hover:text-neutral"
          />
        </button>
        <ul
          tabindex="1"
          class="
            top-6
            right-0
            my-4
            p-2
            shadow-xl
            menu
            dropdown-content
            bg-white
            border
            rounded-box
            w-96
            text-sm
            dark:bg-gray-900 dark:border-gray-900 dark:text-white
          "
        >
          <li id="notif" class="rounded-large px-5 py-3 hover:bg-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            necessitatibus nemo dolores.
          </li>
          <hr class="my-2" />

          <li class="">
            <a class="text-primary active:text-white rounded-large">
              Lihat lainnya..
            </a>
          </li>
        </ul>
      </div>
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
      modeCerah: true,
      modeGelap: false,
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
</style>
