<template>
  <button class="tabActive" :type="type" :class="mode"></button>
</template>

<script>
export default {
  props: ["type", "mode"],
};
</script>
