<template>
  <div
    :class="
      sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'
    "
    class="
      fixed
      z-30
      inset-y-0
      left-0
      w-72
      transition
      duration-300
      transform
      bg-white
      dark:bg-gray-900
      overflow-y-auto
      lg:translate-x-0 lg:static lg:inset-0
    "
  >
    <!-- logo -->
    <div class="flex items-center justify-center py-5 bg-primary">
      <div class="flex items-center">
        <a href="/">
          <span class="dark:text-white text-white text-2xl font-bold"
            >BursaKerja</span
          >
        </a>
      </div>
    </div>

    <!-- navigasi sidebar -->
    <nav class="flex flex-col mt-4 px-4 text-center">
      <a
        class="
          flex
          items-center
          my-1
          py-4
          px-4
          text-neutral
          rounded-large
          bg-purple-100
          hover:bg-gray-100 hover:text-opacity-80
          dark:bg-primary
          dark:text-white
          dark:hover:bg-gray-100
          dark:hover:text-opacity-100
          dark:hover:shadow-glowUngu
          transition-all
          duration-200
        "
        href="#"
      >
        <Icon icon="fluent:home-24-filled" :inline="true" class="text-xl" />

        <span class="mx-4 font-medium">Home</span>
      </a>

      <!-- cari kerja -->
      <a
        class="
          flex
          items-center
          my-1
          py-4
          px-4
          text-neutral
          rounded-large
          hover:bg-gray-100 hover:text-opacity-80
          dark:text-white dark:hover:text-opacity-100 dark:hover:bg-primary
          transition-all
          duration-200
        "
        href="#"
      >
        <Icon icon="fluent:search-24-regular" :inline="true" class="text-xl" />

        <span class="mx-4 font-medium">Cari Kerja</span>
      </a>

      <!-- favorit -->
      <a
        class="
          flex
          items-center
          my-1
          py-4
          px-4
          text-neutral
          rounded-large
          hover:bg-gray-100 hover:text-opacity-80
          dark:text-white dark:hover:text-opacity-100 dark:hover:bg-primary
          transition-all
          duration-200
        "
        href="#"
      >
        <Icon
          icon="fluent:bookmark-24-regular"
          :inline="true"
          class="text-xl"
        />

        <span class="mx-4 font-medium">Favorit</span>
      </a>
    </nav>

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
        dark:border-gray-900
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
          src="../assets/images/avatar.png"
        />
        <div class="leading-6 ml-4 select-disabled bg-opacity-0">
          <h4 class="font-semibold dark:text-white">Jerome Bell</h4>
          <h5
            id="email"
            class="font-semibold text-gray-500 text-xs dark:text-gray-300"
          >
            jeromebell24@gmail.com
          </h5>
        </div>
      </div>

      <!-- dropdown -->
      <ul
        tabindex="0"
        class="
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
          dark:bg-gray-900
          dark:bg-opacity-100
          dark:border-gray-900
          dark:text-white
        "
      >
        <li class="">
          <router-link :to="{ name: 'HalamanProfil' }">
            <Icon
              icon="fluent:person-24-filled"
              :inline="true"
              class="text-xl mr-3"
            />
            <span> Profil </span>
          </router-link>
        </li>
        <li>
          <a>
            <Icon
              icon="fluent:sign-out-24-filled"
              :inline="true"
              class="text-xl mr-3"
            />

            <span> Log Out </span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
};
</script>
