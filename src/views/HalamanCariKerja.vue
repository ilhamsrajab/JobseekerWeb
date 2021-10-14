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
          <div class="container flex-grow mx-auto sm:my-8 xs:w-full xs:my-4">
            <!-- kategori -->
            <div
              class="
                overflow-x-auto
                sm:mb-10
                xs:mb-6
                sm:mx-8
                xl:mx-8
                2xl:mx-0
                no-scrollbar
                rounded-lg
              "
            >
              <div class="space-x-2 inline-flex">
                <CategoryButton :mode="kategoriChef">Chef</CategoryButton>
                <CategoryButton :mode="kategoriDriver">Driver</CategoryButton>
                <CategoryButton :mode="kategoriJasa">Jasa</CategoryButton>
                <CategoryButton :mode="kategoriPendidikan"
                  >Pendidikan</CategoryButton
                >
                <CategoryButton :mode="kategoriTeknologi"
                  >Teknologi</CategoryButton
                >
              </div>
            </div>

            <!-- filter button -->
            <div
              class="mb-5 sm:m-8 xs:m-1 xl:mx-10 2xl:mx-0 flex justify-between"
            >
              <span class="font-semibold dark:text-white dark:text-opacity-80"
                >Cari Kerja</span
              >
              <div class="dropdown dropdown-end dropdown-open">
                <button tabindex="0">
                  <Icon
                    icon="fluent:filter-16-filled"
                    class="
                      rounded-full
                      h-8
                      w-8
                      p-1.5
                      roude
                      hover:bg-accent
                      transition-all
                      duration-200
                      text-2xl
                      dark:hover:text-merahDark
                      dark:text-white
                      dark:text-opacity-80
                    "
                  />
                </button>

                <!-- dropdown -->
                <ul
                  tabindex="1"
                  class="
                    top-6
                    right-0
                    my-4
                    p-2
                    shadow-xl
                    menu
                    border
                    dropdown-content
                    bg-white
                    rounded-box
                    sm:w-96
                    xs:w-80
                    text-sm
                    overflow-y-auto
                    dark:bg-gray-800 dark:border-gray-900 dark:text-white
                  "
                >
                  <li
                    id="notif"
                    class="
                      flex flex-row
                      sm:px-5 sm:py-3
                      xs:px-3 xs:py-3
                      rounded-large
                      cursor-pointer
                      dark:text-white
                      dark:text-opacity-80
                      dark:hover:bg-opacity-20
                      hover:bg-gray-100 hover:text-opacity-80
                      transition-all
                      duration-200
                    "
                  >
                    <span class="font-semibold">Waktu Kerja</span>
                  </li>
                  <li
                    id="notif"
                    class="
                      flex flex-row
                      sm:px-5 sm:py-3
                      xs:px-3 xs:py-3
                      rounded-large
                      cursor-pointer
                      dark:text-white
                      dark:text-opacity-80
                      dark:hover:bg-opacity-20
                      hover:bg-gray-100 hover:text-opacity-80
                      transition-all
                      duration-200
                    "
                  >
                    <span class="font-semibold">Posisi Kerja</span>
                  </li>
                  <li
                    id="notif"
                    class="
                      flex flex-row
                      sm:px-5 sm:py-3
                      xs:px-3 xs:py-3
                      rounded-large
                      cursor-pointer
                      dark:text-white
                      dark:text-opacity-80
                      dark:hover:bg-opacity-20
                      hover:bg-gray-100 hover:text-opacity-80
                      transition-all
                      duration-200
                    "
                  >
                    <span class="font-semibold">Kisaran Gaji</span>
                  </li>
                </ul>
              </div>
            </div>

            <div
              class="
                grid
                2xl:grid-cols-3
                xl:grid-cols-2
                md:grid-cols-2
                xs:grid-cols-1 xs:gap-6
                md:gap-6
                lg:gap-8
                xl:gap-8
                2xl:m-0
                sm:m-8
                xs:mx-1 xs:mt-6
              "
            >
              <!-- card -->
              <Card />
              <Card />
              <Card />
              <Modal />

              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
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
import HalamanProfil from "../views/HalamanProfil.vue";
import CategoryButton from "../components/UI/CategoryButton.vue";
import Card from "../components/UI/Card.vue";
import Modal from "../components/UI/Modal.vue";
import CardSkeleton from "../components/UI/CardSkeleton.vue";
import Sidebar from "../components/Layout/Sidebar.vue";
import Header from "../components/Layout/Header.vue";
import Footer from "../components/Layout/Footer.vue";
import { Icon } from "@iconify/vue";

export default {
  components: {
    HalamanProfil,
    CategoryButton,
    Card,
    Modal,
    CardSkeleton,
    Sidebar,
    Header,
    Footer,
    Icon,
  },
};
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

#email {
  display: block;
  width: 11.5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

#notif {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
