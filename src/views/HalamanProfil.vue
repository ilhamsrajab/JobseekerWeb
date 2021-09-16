<template>
  <div class="flex flex-col items-center min-h-screen">
    <!-- image -->
    <div class="flex items-center">
      <img
        alt="avatar"
        class="w-40 rounded-full select-disabled group-hover:rotate-3 transform"
        src="../assets/images/avatar.png"
      />
    </div>

    <!-- nama -->
    <div class="leading-6 mt-4 mb-10 text-center">
      <h4 class="font-bold dark:text-white text-2xl">Jerome Bell</h4>
      <h5 id="email" class="font-medium text-gray-500 dark:text-gray-300">
        jeromebell24@gmail.com
      </h5>
    </div>

    <!-- tab -->
    <div class="bg-white py-4 rounded-large px-1 space-x-2 text-gray-400">
      <a
        href="#"
        class="
          bg-primary
          text-white
          rounded-large
          px-6
          py-3
          transition-all
          duration-200
        "
        @click="setSelectedTab('data-diri')"
        >Data Diri</a
      >
      <a
        href="#"
        class="
          hover:text-neutral
          rounded-large
          px-6
          py-3
          transition-all
          duration-200
        "
        @click="setSelectedTab('media-sosial')"
        >Media Sosial</a
      >
      <a
        href="#"
        class="
          hover:text-neutral
          rounded-large
          px-6
          py-3
          transition-all
          duration-200
        "
        @click="setSelectedTab('berkas')"
        >Berkas</a
      >
      <a
        href="#"
        class="
          hover:text-neutral
          rounded-large
          px-6
          py-3
          transition-all
          duration-200
        "
        @click="setSelectedTab('riwayat-pekerjaan')"
        >Riwayat Pekerjaan</a
      >
    </div>
    <component :is="selectedTab"></component>
  </div>
</template>

<script>
import DataDiri from "../components/profil/DataPribadi.vue";
import MediaSosial from "../components/profil/MediaSosial.vue";
import Berkas from "../components/profil/Berkas.vue";
import RiwayatPekerjaan from "../components/profil/RiwayatPekerjaan.vue";
import { Icon } from "@iconify/vue";

export default {
  components: {
    DataDiri,
    MediaSosial,
    Berkas,
    RiwayatPekerjaan,
    Icon,
  },
  data() {
    return {
      selectedTab: "data-diri",
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
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
</style>
