<template>
  <a href="#" @click.prevent="toggleTheme">
    <!-- light mode -->
    <div v-if="theme === 'light'" class="group flex items-center">
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
      <span
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
      </span>
    </div>

    <!-- dark mode -->
    <div v-else class="group flex items-center">
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
      <span
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
      </span>
    </div>
  </a>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
  props: {
    theme: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggleTheme() {
      const newTheme = this.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      this.$emit("themeChanged", newTheme);
      this.$router.go();
    },
  },
};
</script>
