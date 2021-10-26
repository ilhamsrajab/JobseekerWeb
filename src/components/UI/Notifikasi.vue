<template>
  <li
    id="notif"
    class="
      flex flex-row
      sm:px-5 sm:py-3
      xs:px-3 xs:py-3
      rounded-large
      cursor-pointer
      dark:text-white dark:text-opacity-80 dark:hover:bg-opacity-20
      hover:bg-gray-100 hover:text-opacity-80
      transition-all
      duration-200
    "
  >
    <img
      src="https://images.unsplash.com/photo-1622180203374-9524a54b734d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
      alt="Logo"
      class="
        sm:w-14 sm:h-14
        xs:w-10 xs:h-10
        object-cover
        lg:rounded-large
        md:rounded-large
        sm:rounded-large
        xs:rounded-lg
        shadow-xl
        transition-all
        duration-200
        mr-4
        mb-3
      "
    />
    <div class="w-full">
      <slot></slot>
      <br />
      <div
        class="flex flex-row justify-between items-center mt-6 text-gray-400"
      >
        <span class="inline-flex items-center align-top space-x-1">
          <Icon icon="fluent:clock-24-filled" :inline="true" />
          <p class="text-xs">Waktu</p>
        </span>
        <span class="inline-flex items-center align-top space-x-1">
          <div class="badge-magang">Diproses</div>
          <div class="badge-parttime">Ditolak</div>
          <div class="badge-fulltime">Diterima</div>
        </span>
      </div>
    </div>
  </li>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
};
</script>
