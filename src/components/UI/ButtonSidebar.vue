<template>
  <button class="btnSidebarActive" :type="type" :class="mode">
    <slot class="mx-4 font-medium"></slot>
  </button>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  props: ['type', 'mode'],
  components: {
    Icon,
  },
};
</script>
