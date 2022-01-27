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
            <div
              class="font-semibold place-self-start xl:ml-80 lg:ml-28 sm:ml-14 dark:text-white dark:text-opacity-80"
            >
              Notifikasi
            </div>
            <div
              class="bg-white dark:bg-gray-900 rounded-20 xl:py-5 xl:px-4 lg:py-5 lg:px-4 md:py-5 md:px-6 sm:py-3 sm:px-2 xs:py-3 xs:px-2 text-gray-500 sm:mt-4 xs:mt-4 xs:w-full sm:w-10/12 md:w-4/5 xl:w-3/5"
            >
              <ul
                class="space-y-2 rounded-box sm:text-base xs:text-sm dark:text-white"
              >
                Belum ada notifikasi.
                <!-- <Notifikasi class="new-notification">
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
                  >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                  tempora recusandae dolore. Numquam, quidem?</Notifikasi
                > -->
              </ul>
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
