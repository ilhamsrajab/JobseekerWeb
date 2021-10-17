<template>
  <div class="drawer drawer-mobile h-screen bg-gray-100 dark:bg-gray-800">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

    <div class="drawer-content flex-1 flex flex-col overflow-hidden">
      <!-- header -->
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
                  mt-2
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
            <div class="leading-6 mt-4 xs:mb-4 sm:mb-8 text-center">
              <h4
                class="font-bold dark:text-white dark:text-opacity-80 text-2xl"
              >
                Jerome Bell
              </h4>
              <h5
                id="email"
                class="font-medium text-gray-500 dark:text-gray-300 mt-2"
              >
                jeromebell24@gmail.com
              </h5>
            </div>

            <!-- tab -->
            <div
              class="
                flex flex-row
                bg-white
                dark:bg-gray-900
                p-2
                rounded-20
                xs:space-x-1
                sm:space-x-2
                xs:mx-10
                sm:mx-10
                xs:text-2xs
                md:text-base
              "
            >
              <ButtonTab
                @click="setSelectedTab('data-diri')"
                :mode="dataDiriButtonMode"
                >Data Diri</ButtonTab
              >
              <ButtonTab
                @click="setSelectedTab('media-sosial')"
                :mode="mediaSosialButtonMode"
                >Media Sosial</ButtonTab
              >
              <ButtonTab
                @click="setSelectedTab('berkas')"
                :mode="berkasButtonMode"
                >Berkas</ButtonTab
              >
              <ButtonTab
                @click="setSelectedTab('riwayat-pekerjaan')"
                :mode="riwayatPekerjaanButtonMode"
                >Riwayat Pekerjaan</ButtonTab
              >
            </div>
            <div
              class="
                bg-white
                dark:bg-gray-900
                rounded-20
                xl:py-8 xl:px-16
                lg:py-4 lg:px-12
                md:py-2 md:px-10
                sm:py-0 sm:px-8
                xs:py-0 xs:px-4
                text-gray-500
                sm:mt-8
                xs:mt-4 xs:w-full
                sm:w-10/12
                md:w-4/5
                xl:w-3/5
              "
            >
              <component :is="selectedTab"></component>
            </div>
          </div>
        </div>
        <!-- footer -->
        <Footer />
      </main>
    </div>
    <!-- sidebar -->
    <div class="drawer-side">
      <label for="my-drawer-2" class="drawer-overlay"></label>
      <Sidebar />
    </div>
    <!-- end of sidebar -->
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
