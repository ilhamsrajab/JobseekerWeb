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
                  alt="logo perusahaan"
                  class="
                    w-40
                    rounded-full
                    select-disabled
                    group-hover:rotate-3
                    transform
                  "
                  src="../assets/images/default-avatar.svg"
                />
              </div>

              <!-- nama -->
              <div class="leading-6 mt-4 mb-10 text-center">
                <h4 class="font-bold dark:text-white text-2xl">
                  Nama Perusahaan
                </h4>
                <h5 id="email" class="font-medium text-gray-500 mt-2">
                  Posisi Kerja
                </h5>
              </div>

              <!-- tab -->
              <div class="rounded-large space-x-2 w-full flex flex-col">
                <span
                  class="
                    inline-flex
                    items-center
                    align-top
                    space-x-1
                    justify-end
                  "
                >
                  <Icon icon="fluent:clock-24-filled" :inline="true" />
                  <p class="text-sm">Waktu</p>
                </span>
                <hr class="bg-pink-700 h-1" />
                <!-- informasi singkat -->
                <div
                  class="
                    py-8
                    grid grid-cols-3
                    gap-y-5 gap-x-2
                    bg-pink-200
                    w-3/4
                    self-center
                  "
                >
                  <span
                    class="
                      inline-flex
                      items-center
                      space-x-1
                      bg-blue-200
                      justify-center
                    "
                  >
                    <Icon icon="fluent:location-24-filled" :inline="true" />
                    <p class="text-sm">Lokasi</p>
                  </span>
                  <span
                    class="
                      inline-flex
                      items-center
                      space-x-
                      bg-blue-200
                      justify-center
                    "
                  >
                    <Icon icon="fluent:location-24-filled" :inline="true" />
                    <p class="text-sm">Rp. 1.000.000 - Rp. 4.000.000</p>
                  </span>
                  <span
                    class="
                      inline-flex
                      items-center
                      space-x-1
                      bg-blue-200
                      justify-center
                    "
                  >
                    <Icon icon="fluent:location-24-filled" :inline="true" />
                    <p class="text-sm">Jumlah Pendaftar</p>
                  </span>
                  <span
                    class="
                      inline-flex
                      items-center
                      space-x-1
                      bg-blue-200
                      justify-center
                    "
                  >
                    <Icon icon="fluent:location-24-filled" :inline="true" />
                    <p class="text-sm">Batas Pendaftaran</p>
                  </span>
                  <span
                    class="
                      inline-flex
                      items-center
                      space-x-1
                      bg-blue-200
                      justify-center
                    "
                  >
                    <Icon icon="fluent:location-24-filled" :inline="true" />
                    <p class="text-sm">Full-Time</p>
                  </span>
                  <span
                    class="
                      inline-flex
                      items-center
                      space-x-1
                      bg-blue-200
                      justify-center
                    "
                  >
                    <Icon icon="fluent:location-24-filled" :inline="true" />
                    <p class="text-sm">Kuota</p>
                  </span>
                </div>
                <hr class="bg-pink-700 h-1" />
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
