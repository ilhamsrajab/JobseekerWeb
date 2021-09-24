<template>
  <div
    x-data="{ sidebarOpen: false, darkMode: false }"
    :class="{ dark: darkMode }"
  >
    <div class="flex h-screen bg-gray-100 dark:bg-gray-800">
      <div
        :class="sidebarOpen ? 'block' : 'hidden'"
        @click="sidebarOpen = false"
        class="
          fixed
          z-20
          inset-0
          bg-black
          opacity-50
          transition-opacity
          lg:hidden
        "
      ></div>

      <!-- sidebar -->
      <Sidebar />

      <!-- header -->
      <div class="flex-1 flex flex-col overflow-hidden">
        <Header />

        <!-- main page -->
        <main class="flex flex-col h-screen overflow-x-hidden overflow-y-auto">
          <div class="container flex-grow mx-auto m-8">
            <!-- Halaman Profil -->
            <div class="flex flex-col items-center min-h-screen">
              <!-- image -->
              <div class="flex items-center">
                <img
                  alt="avatar"
                  class="
                    w-40
                    rounded-full
                    select-disabled
                    group-hover:rotate-3
                    transform
                  "
                  src="../assets/images/avatar.png"
                />
              </div>

              <!-- nama -->
              <div class="leading-6 mt-4 mb-10 text-center">
                <h4 class="font-bold dark:text-white text-2xl">Jerome Bell</h4>
                <h5
                  id="email"
                  class="font-medium text-gray-500 dark:text-gray-300 mt-2"
                >
                  jeromebell24@gmail.com
                </h5>
              </div>

              <!-- tab -->
              <div
                class="bg-white py-2 rounded-large px-2 space-x-2 text-gray-400"
              >
                <button-tab
                  @click="setSelectedTab('data-diri')"
                  :mode="dataDiriButtonMode"
                  >Data Diri</button-tab
                >
                <button-tab
                  @click="setSelectedTab('media-sosial')"
                  :mode="mediaSosialButtonMode"
                  >Media Sosial</button-tab
                >
                <button-tab
                  @click="setSelectedTab('berkas')"
                  :mode="berkasButtonMode"
                  >Berkas</button-tab
                >
                <button-tab
                  @click="setSelectedTab('riwayat-pekerjaan')"
                  :mode="riwayatPekerjaanButtonMode"
                  >Riwayat Pekerjaan</button-tab
                >
              </div>
              <component :is="selectedTab"></component>
            </div>
          </div>
          <!-- footer -->
          <Footer />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Layout/Sidebar.vue";
import Header from "../components/Layout/Header.vue";
import Footer from "../components/Layout/Footer.vue";
import DataDiri from "../components/profil/DataPribadi.vue";
import MediaSosial from "../components/profil/MediaSosial.vue";
import Berkas from "../components/profil/Berkas.vue";
import RiwayatPekerjaan from "../components/profil/RiwayatPekerjaan.vue";
import ButtonTab from "../components/UI/ButtonTab.vue";
import { Icon } from "@iconify/vue";

export default {
  components: {
    DataDiri,
    MediaSosial,
    Berkas,
    RiwayatPekerjaan,
    Icon,
    ButtonTab,
    Sidebar,
    Header,
    Footer,
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
  computed: {
    dataDiriButtonMode() {
      return this.selectedTab === "data-diri" ? null : "tabDisable";
    },
    mediaSosialButtonMode() {
      return this.selectedTab === "media-sosial" ? null : "tabDisable";
    },
    berkasButtonMode() {
      return this.selectedTab === "berkas" ? null : "tabDisable";
    },
    riwayatPekerjaanButtonMode() {
      return this.selectedTab === "riwayat-pekerjaan" ? null : "tabDisable";
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
