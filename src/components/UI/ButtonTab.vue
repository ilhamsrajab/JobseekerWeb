<template>
  <button
    class="
      tabActive

    "
    :type="type"
    :class="mode"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["type", "mode"],
};
</script>
