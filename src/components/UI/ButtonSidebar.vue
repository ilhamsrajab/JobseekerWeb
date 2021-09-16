<template>
  <button
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
      transition-all
      duration-200
      dark:bg-primary
      dark:text-white
      dark:hover:bg-gray-100
      dark:hover:text-opacity-100
      dark:hover:shadow-glowUngu
    "
    href="#"
  >
    <Icon icon="fluent:home-24-filled" :inline="true" class="text-xl" />

    <span class="mx-4 font-medium">Home</span>
  </button>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
};
</script>
