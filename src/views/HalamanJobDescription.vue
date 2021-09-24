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
              <div class="leading-6 mt-4 mb-5 text-center">
                <h4 class="font-bold dark:text-white text-2xl">
                  Nama Perusahaan
                </h4>
                <h5 id="email" class="font-medium text-gray-500 mt-2">
                  Posisi Kerja
                </h5>
              </div>

              <!-- tab -->
              <div class="w-full flex flex-col">
                <!-- waktu -->
                <span
                  class="
                    inline-flex
                    items-center
                    align-top
                    space-x-2
                    justify-end
                    xl:w-2/3
                    md:w-full
                    mx-auto
                    mb-3
                    text-gray-500
                  "
                >
                  <Icon icon="fluent:clock-24-filled" :inline="true" />
                  <p class="text-sm">Waktu</p>
                </span>
                <!-- informasi singkat -->
                <div
                  class="
                    py-8
                    grid grid-flow-row
                    auto-cols-max
                    grid-cols-3
                    gap-y-5 gap-x-10
                    justify-items-center
                    bg-white
                    rounded-large
                    px-10
                    xl:w-2/3
                    md:w-full
                    text-gray-500
                    mx-auto
                  "
                >
                  <span class="inline-flex items-center space-x-2 w-56">
                    <Icon icon="fluent:location-24-filled" :inline="true" />
                    <p class="text-sm">Lokasi</p>
                  </span>
                  <span class="inline-flex items-center space-x-2 w-56">
                    <Icon icon="fluent:money-24-filled" :inline="true" />
                    <p class="text-sm">Rp. 1.000.000 - Rp. 4.000.000</p>
                  </span>
                  <span class="inline-flex items-center space-x-2 w-56">
                    <Icon
                      icon="fluent:person-accounts-24-filled"
                      :inline="true"
                    />
                    <p class="text-sm">Jumlah Pendaftar</p>
                  </span>
                  <span class="inline-flex items-center space-x-2 w-56">
                    <Icon icon="fluent:clock-24-filled" :inline="true" />
                    <p class="text-sm">Batas Pendaftaran</p>
                  </span>
                  <span class="inline-flex items-center space-x-2 w-56">
                    <Icon icon="fluent:clock-24-filled" :inline="true" />
                    <p class="text-sm">Full-Time</p>
                  </span>
                  <span class="inline-flex items-center space-x-2 w-56">
                    <Icon icon="fluent:people-team-24-filled" :inline="true" />
                    <p class="text-sm">Kuota</p>
                  </span>
                </div>
              </div>
              <!-- end of tab -->

              <!-- descrition -->
              <div
                class="
                  py-8
                  bg-white
                  rounded-large
                  px-10
                  xl:w-2/3
                  md:w-full
                  text-gray-500
                  mt-8
                "
              >
                <!-- isi Deskripsi -->
                <div class="leading-7 space-y-4">
                  <h2 class="font-bold text-xl mb-3">Deskripsi Pekerjaan</h2>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt quae omnis illum. Asperiores magni libero, veritatis
                    quia in dolorum error cum nam excepturi eos delectus sed
                    deserunt provident adipisci magnam. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Nulla excepturi, eveniet
                    eum aliquid exercitationem officiis aliquam veniam quibusdam
                    corrupti explicabo at nostrum repudiandae vel eaque culpa ab
                    nobis rerum ipsa.
                  </span>

                  <h2 class="font-bold text-lg mb-3">Responsibilities :</h2>
                  <ul class="list-disc list-inside">
                    <li>Designing and implementing Java-based applications.</li>
                    <li>
                      Analyzing user requirements to inform application design.
                    </li>
                    <li>Defining application objectives and functionality.</li>
                    <li>Aligning application design with business goals.</li>
                    <li>Developing and testing software.</li>
                    <li>
                      Debugging and resolving technical problems that arise.
                    </li>
                    <li>Producing detailed design documentation.</li>
                    <li>
                      Recommending changes to existing Java infrastructure.
                    </li>
                    <li>Developing documentation to assist users</li>
                    <li>Ensuring continuous professional self-development.</li>
                  </ul>
                </div>
              </div>
              <!-- end of descrition -->
            </div>
          </div>
          <!-- footer -->
          <Footer />
          <!-- end of footer -->
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
