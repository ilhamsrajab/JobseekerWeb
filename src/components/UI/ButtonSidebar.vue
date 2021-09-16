<template>
  <button class="btnSidebarDisable" href="#">
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
