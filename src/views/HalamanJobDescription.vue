<template>
  <!-- modal -->
  <input type="checkbox" id="my-modal-2" class="modal-toggle" />
  <!-- isi modal -->
  <div
    class="
      modal
      dark:text-white dark:text-opacity-80
      overflow-y-auto
      lg:p-8
      sm:p-6
      xs:p-4
    "
  >
    <div class="modal-box my-auto md:rounded-20 xs:rounded-large">
      <p>Apakah Anda yakin ingin mendaftar pekerjaan ini?</p>
      <div class="modal-action justify-end">
        <label for="my-modal-2" class="btn btn-outline w-40">Tidak</label>
        <div class="w-40">
          <router-link :to="{ name: 'DaftarDataDiri' }">
            <label for="my-modal-2" class="btn btn-primary w-40">Yakin</label>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <!-- end of modal -->
  <div class="drawer drawer-mobile h-screen bg-gray-100 dark:bg-gray-800">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

    <div class="drawer-content flex-1 flex flex-col overflow-hidden">
      <!-- header -->
      <Header />

      <!-- main page -->
      <main class="flex flex-col h-screen overflow-x-hidden overflow-y-auto">
        <div class="flex-grow mx-auto m-8">
          <!-- Halaman Profil -->
          <div class="flex flex-col items-center min-h-screen">
            <!-- image -->
            <div class="flex items-center">
              <img
                alt="logo perusahaan"
                class="
                  mt-2
                  w-40
                  h-40
                  rounded-full
                  select-disabled
                  group-hover:rotate-3
                  transform
                "
                src="https://images.unsplash.com/photo-1622180203374-9524a54b734d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
              />
            </div>

            <!-- nama -->
            <div class="leading-6 mt-4 mb-5 text-center">
              <h4
                class="font-bold dark:text-white dark:text-opacity-80 text-2xl"
              >
                {{ namaPerusahaan }}
              </h4>
              <h5
                id="email"
                class="font-medium text-gray-500 dark:text-gray-400 mt-2"
              >
                <!-- {{ posisi }} -->
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
                  2xl:w-3/5
                  lg:w-4/5
                  md:w-11/12
                  sm:w-11/12
                  mx-auto
                  mb-3
                  text-gray-500
                  dark:text-gray-400
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
                  gap-y-5 gap-x-10
                  bg-white
                  dark:bg-gray-900
                  rounded-20
                  2xl:w-3/5
                  xl:grid-cols-3
                  lg:m-8 lg:w-4/5 lg:mx-auto
                  md:mx-auto
                  sm:mx-auto
                  sm:m-6
                  sm:px-10
                  sm:w-11/12
                  sm:grid-cols-2
                  sm:justify-items-center
                  md:w-11/12
                  xs:m-4 xs:px-6 xs:w-full xs:grid-cols-1 xs:mx-auto
                  text-gray-500
                  dark:text-white dark:text-opacity-60
                "
              >
                <span
                  class="inline-flex items-center space-x-2 w-56"
                  title="Lokasi penempatan kerja"
                >
                  <Icon icon="fluent:location-24-filled" :inline="true" />
                  <p class="text-sm">Lokasi</p>
                </span>
                <span
                  class="inline-flex items-center space-x-2 w-56"
                  title="Kisaran gaji"
                >
                  <Icon icon="fluent:money-24-filled" :inline="true" />
                  <p class="text-sm">Rp. 1.000.000 - Rp. 4.000.000</p>
                </span>
                <span
                  class="inline-flex items-center space-x-2 w-56"
                  title="Jumlah pelamar pada lamaran ini"
                >
                  <Icon
                    icon="fluent:person-accounts-24-filled"
                    :inline="true"
                  />
                  <p class="text-sm">Jumlah Pendaftar</p>
                </span>
                <span
                  class="inline-flex items-center space-x-2 w-56"
                  title="Batas pendaftaran lamaran"
                >
                  <Icon icon="fluent:clock-24-filled" :inline="true" />
                  <p class="text-sm">Batas Pendaftaran</p>
                </span>
                <span
                  class="inline-flex items-center space-x-2 w-56"
                  title="Jenis pekerjaan"
                >
                  <Icon icon="fluent:clock-24-filled" :inline="true" />
                  <p class="text-sm">Full-Time</p>
                </span>
                <span
                  class="inline-flex items-center space-x-2 w-56"
                  title="Kuota yang dibutuhkan"
                >
                  <Icon icon="fluent:people-team-24-filled" :inline="true" />
                  <p class="text-sm">Kuota</p>
                </span>
              </div>
            </div>
            <!-- end of tab -->

            <!-- descrition -->
            <div
              class="
                bg-white
                dark:bg-gray-900 dark:text-white dark:text-opacity-80
                rounded-20
                text-neutral
                mt-8
                2xl:w-3/5
                lg:p-14 lg:w-4/5
                md:p-10 md:w-11/12
                sm:p-8 sm:w-11/12
                xs:p-6 xs:w-full
              "
            >
              <!-- isi Deskripsi -->
              <div class="leading-7 space-y-4">
                <h2 class="font-bold text-xl mb-3">Deskripsi Pekerjaan</h2>
                <span
                  class="
                    text-neutral text-opacity-80
                    xs:text-sm
                    md:text-base
                    dark:text-white dark:text-opacity-60
                  "
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  quae omnis illum. Asperiores magni libero, veritatis quia in
                  dolorum error cum nam excepturi eos delectus sed deserunt
                  provident adipisci magnam. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Nulla excepturi, eveniet eum
                  aliquid exercitationem officiis aliquam veniam quibusdam
                  corrupti explicabo at nostrum repudiandae vel eaque culpa ab
                  nobis rerum ipsa.
                </span>

                <h2 class="font-bold text-lg mb-3">Responsibilities :</h2>
                <ul
                  class="
                    list-disc list-inside
                    text-neutral text-opacity-80
                    dark:text-white dark:text-opacity-60
                    xs:text-sm
                    md:text-base
                  "
                >
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
                  <li>Recommending changes to existing Java infrastructure.</li>
                  <li>Developing documentation to assist users</li>
                  <li>Ensuring continuous professional self-development.</li>
                </ul>

                <h2 class="font-bold text-lg mb-3">Requirements :</h2>
                <ul
                  class="
                    list-disc list-inside
                    text-neutral text-opacity-80
                    xs:text-sm
                    md:text-base
                    dark:text-white dark:text-opacity-60
                  "
                >
                  <li>
                    Bachelor’s Degree or more 3 ~ 5 years web programming
                    experience.
                  </li>
                  <li>Degree in Computer Science or related field.</li>
                  <li>
                    Experience with user interface design, database structures
                    and statistical analyses.
                  </li>
                  <li>Analytical mindset and good problem-solving skills.</li>
                  <li>Excellent written and verbal communication.</li>
                  <li>
                    Good organizational skills Ability to work as part of a team
                    Effective written and verbal communication in English
                  </li>
                  <li>
                    Ability to understand transportation business and system.
                  </li>
                  <li>
                    Strong working knowledge of Microsoft Office applications
                    such as Excel, Word and PowerPoint
                  </li>
                </ul>
              </div>
              <!-- end of isi description -->
            </div>
            <!-- end of descrition -->

            <!-- berkas -->
            <div class="w-full flex flex-col mt-8">
              <div
                class="
                  py-8
                  justify-items-center
                  bg-white
                  dark:bg-gray-900 dark:text-white dark:text-opacity-80
                  rounded-20
                  lg:px-10
                  md:px-6
                  xs:px-2
                  2xl:w-3/5
                  lg:w-4/5 lg:mx-auto
                  md:mx-8
                  sm:mx-6
                "
              >
                <span class="font-bold text-lg px-4"
                  >Berkas yang dibutuhkan :</span
                >
                <div
                  class="
                    mx-4
                    mt-6
                    grid grid-flow-row
                    auto-cols-max
                    xl:grid-cols-3
                    sm:grid-cols-2
                    xs:grid-cols-1
                    gap-y-5 gap-x-10
                  "
                >
                  <span class="inline-flex items-center space-x-2 w-56">
                    <Icon
                      icon="fluent:checkmark-circle-24-filled"
                      :inline="true"
                      class="text-hijauDark dark:text-hijau"
                    />
                    <p class="text-sm">Ijazah</p>
                  </span>
                  <span class="inline-flex items-center space-x-2 w-56">
                    <Icon
                      icon="fluent:checkmark-circle-24-filled"
                      class="text-hijauDark dark:text-hijau"
                      :inline="true"
                    />
                    <p class="text-sm">Curriculum Vitae (CV)</p>
                  </span>
                  <span class="inline-flex items-center space-x-2 w-56">
                    <Icon
                      icon="fluent:checkmark-circle-24-filled"
                      class="text-hijauDark dark:text-hijau"
                      :inline="true"
                    />
                    <p class="text-sm">Portofolio</p>
                  </span>
                  <span class="inline-flex items-center space-x-2 w-56">
                    <Icon
                      icon="fluent:checkmark-circle-24-filled"
                      class="text-hijauDark dark:text-hijau"
                      :inline="true"
                    />
                    <p class="text-sm">Sertifikat</p>
                  </span>
                  <span class="inline-flex items-center space-x-2 w-56">
                    <Icon
                      icon="fluent:checkmark-circle-24-filled"
                      class="text-hijauDark dark:text-hijau"
                      :inline="true"
                    />
                    <p class="text-sm">Transkrip Nilai</p>
                  </span>
                  <span class="inline-flex items-center space-x-2 w-56">
                    <Icon
                      icon="fluent:checkmark-circle-24-filled"
                      class="text-hijauDark dark:text-hijau"
                      :inline="true"
                    />
                    <p class="text-sm">SIM C</p>
                  </span>
                </div>
              </div>
            </div>
            <!-- end of berkas -->

            <!-- button -->
            <div
              class="
                mt-8
                sm:py-8 sm:px-10
                xs:py-4 xs:px-5
                flex flex-row
                gap-x-2
                justify-items-center
                bg-white
                dark:bg-gray-900 dark:text-white dark:text-opacity-80
                rounded-20
                2xl:w-3/5
                lg:w-4/5 lg:mx-auto
                md:w-11/12
                sm:w-11/12
                xs:w-full
              "
            >
              <label for="my-modal-2" class="btn btn-primary flex-auto"
                >Daftar</label
              >

              <button
                class="btn btn-accent text-xl flex-1 text-neutral"
                title="Buka di tab baru"
              >
                <Icon
                  icon="fluent:full-screen-maximize-24-filled"
                  :inline="true"
                />
              </button>
              <button
                class="btn btn-accent text-xl flex-1 text-neutral"
                title="Tambah ke favorit"
              >
                <Icon icon="fluent:bookmark-add-24-filled" :inline="true" />
              </button>
              <button
                class="btn btn-accent text-xl flex-1 text-neutral"
                title="Bagikan"
              >
                <Icon icon="fluent:share-android-24-filled" :inline="true" />
              </button>
            </div>
            <!-- end of button -->
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
  props: ["id"],
  data() {
    return {
      selectedLoker: null,
    };
  },
  computed: {
    namaPerusahaan() {
      return this.selectedLoker;
    },
    posisi() {
      return this.selectedLoker.posisi;
    },
  },
  created() {
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("token");
    this.selectedLoker = this.$store.dispatch("auth/getDataLowonganKerja");
    this.selectedLoker = this.$store.getters["auth/data_lowongan_kerja"].find(
      (id) => id.id === this.id
    );
  },
};
</script>
