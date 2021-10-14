<template>
  <header class="flex justify-between items-center px-6 py-4 bg-primary">
    <div class="flex items-center space-x-4 xl:space-x-0">
      <!-- hamburger menu -->
      <button
        @click="sidebarOpen = true"
        class="text-gray-500 dark:text-gray-300 focus:outline-none xl:hidden"
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
      <!-- logotype -->
      <div class="flex items-center xs:hidden lg:inline-flex xl:hidden">
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
            class="xs:h-4 sm:h-6"
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

    <!-- button notifikasi dan dark mode -->
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
              animate-ping
            "
          ></span>
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

        <!-- dropdown -->
        <ul
          tabindex="1"
          class="
            top-6
            right-0
            my-4
            p-2
            shadow-xl
            menu
            border
            dropdown-content
            bg-white
            rounded-box
            w-96
            text-sm
            dark:bg-gray-800 dark:border-gray-900 dark:text-white
          "
        >
          <Notifikasi>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
            possimus fugiat blanditiis facilis reiciendis esse, nesciunt commodi
            itaque exercitationem et, fuga temporibus, quos iusto magni.
            Assumenda aspernatur delectus distinctio dolorum.
          </Notifikasi>
          <Notifikasi
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            recusandae? Omnis, deserunt earum! Dicta sint illo corporis!
            Perferendis.</Notifikasi
          >
          <Notifikasi
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit,
            dicta!</Notifikasi
          >
          <Notifikasi
            >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
            tempora recusandae dolore. Numquam, quidem?</Notifikasi
          >
          <div class="my-2 bg-gray-100 dark:bg-gray-700 h-0.5" />

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
            <router-link :to="{ name: 'HalamanNotifikasi' }">
              <span
                class="text-primary dark:text-purple-300 dark:text-opacity-80"
              >
                Lihat lainnya..
              </span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { Icon } from "@iconify/vue";
import Notifikasi from "../../components/UI/Notifikasi.vue";

export default {
  components: {
    Icon,
    Notifikasi,
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

@media only screen and (max-width: 480px) {
  .searchbar:focus {
    width: 11rem;
  }
}
</style>
