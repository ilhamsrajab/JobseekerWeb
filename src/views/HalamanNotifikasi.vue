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
              <div class="w-full flex flex-row xl:mx-80 lg:mx-28 sm:mx-14">
                <div
                  class="
                    font-semibold
                    place-self-start
                    dark:text-white dark:text-opacity-80
                  "
                >
                  Notifikasi
                </div>
                <div
                  class="
                    font-semibold
                    place-self-start
                    dark:text-white dark:text-opacity-80
                  "
                >
                  Notifikasi
                </div>
              </div>
              <div
                class="
                  bg-white
                  dark:bg-gray-900
                  rounded-20
                  xl:py-5 xl:px-4
                  lg:py-5 lg:px-4
                  md:py-5 md:px-6
                  sm:py-3 sm:px-2
                  xs:py-3 xs:px-2
                  text-gray-500
                  sm:mt-4
                  xs:mt-4 xs:w-full
                  sm:w-10/12
                  md:w-4/5
                  xl:w-3/5
                "
              >
                <ul
                  class="
                    space-y-2
                    rounded-box
                    sm:text-base
                    xs:text-sm
                    dark:text-white
                  "
                >
                  <Notifikasi class="font-semibold">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Labore possimus fugiat blanditiis facilis reiciendis esse,
                    nesciunt commodi itaque exercitationem et, fuga temporibus,
                    quos iusto magni. Assumenda aspernatur delectus distinctio
                    dolorum.
                  </Notifikasi>
                  <Notifikasi
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam, recusandae? Omnis, deserunt earum! Dicta sint illo
                    corporis! Perferendis.</Notifikasi
                  >
                  <Notifikasi
                    >Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sit, dicta!</Notifikasi
                  >
                  <Notifikasi
                    >Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ab tempora recusandae dolore. Numquam, quidem?</Notifikasi
                  >
                </ul>
              </div>
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
import Notifikasi from "../components/UI/Notifikasi.vue";
import { Icon } from "@iconify/vue";

export default {
  components: {
    DataDiri,
    Icon,
    Sidebar,
    Header,
    Footer,
    Notifikasi,
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
