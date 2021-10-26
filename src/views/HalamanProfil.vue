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
            <div class="flex indicator items-center">
              <!-- indikator edit gambar -->
              <input
                id="fotoPribadi"
                type="file"
                accept="image/*"
                title="Pilih foto pribadi"
                class="input input-primary w-full py-3.5 px-4"
                hidden
              />
              <label
                title="Edit foto pribadi"
                class="
                  label
                  font-semibold
                  indicator-item indicator-bottom
                  group
                  rounded-full
                  bg-accent
                  hover:bg-accentDark
                  h-8
                  w-8
                  flex
                  justify-center
                  items-center
                  mb-3
                  mr-3
                  shadow-large
                  p-1.5
                  transition-all
                  duration-200
                "
                for="fotoPribadi"
              >
                <Icon
                  icon="fluent:edit-24-filled"
                  :inline="true"
                  class="dark:text-neutral transition-all duration-200"
                />
              </label>
              <!-- end of indikator edit gambar -->
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
            <!-- end of image -->

            <!-- nama -->
            <div class="leading-6 mt-4 xs:mb-4 sm:mb-8 text-center">
              <h4
                class="font-bold dark:text-white dark:text-opacity-80 text-2xl"
              >
                {{ getDataDiri.nama }}
              </h4>
              <h5
                id="email"
                class="font-medium text-gray-500 dark:text-gray-300 mt-2"
              >
                {{ getDataUser.email }}
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
import axios from "axios";

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
  created() {
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("token");
    this.dataUser = this.$store.dispatch("auth/getDataUser");
    this.dataDiri = this.$store.dispatch("auth/getDataDiri");
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
    getDataUser() {
      return this.$store.getters["auth/data_user"];
    },
    getDataDiri() {
      return this.$store.getters["auth/data_diri"];
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
