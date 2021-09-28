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
          xl:hidden
        "
      ></div>

      <!-- sidebar -->
      <Sidebar />

      <!-- header -->
      <div class="flex-1 flex flex-col overflow-hidden">
        <Header />

        <!-- main page -->
        <main class="flex flex-col h-screen overflow-x-hidden overflow-y-auto">
          <!-- hero -->
          <Hero />
          <!-- end hero -->

          <!-- kategori pekerjaan -->
          <div class="sm:mx-8 xs:mx-4 sm:my-10 xs:my-5">
            <span class="sm:text-xl xs:text-lg font-semibold">
              Kategori pekerjaan
            </span>
            <button class="ml-3 badge h-6 px-3">Lihat lainnya</button>
            <div
              class="
                grid grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-5 xl:gap-8
                lg:gap-6
                xs:gap-4
                mt-5
              "
            >
              <CardCategory class="md:col-span-2 lg:col-span-2 xl:col-span-1" />
              <CardCategory />
              <CardCategory />
              <CardCategory />
              <CardCategory />
            </div>
          </div>
          <!-- end kategori pekerjaan -->

          <!-- iklan -->
          <!-- <div class="mt-10 -mb-20 px-8 py-16 bg-gray-50 font-bold text-xl">
            <div class="text-center">Perusahaan</div>
            <div
              class="
                grid grid-cols-1
                md:grid-cols-3
                xl:grid-cols-5
                mt-8
                bg-pink-400
              "
            >
              <img
                src="../assets/images/default-avatar.svg"
                class="
                  w-40
                  rounded-40
                  flex
                  items-end
                  hover:shadow-lg
                  transition-all
                  duration-200
                "
              />
              <img
                src="../assets/images/default-avatar.svg"
                class="
                  w-40
                  rounded-40
                  flex
                  items-end
                  hover:shadow-lg
                  transition-all
                  duration-200
                "
              />
              <img
                src="../assets/images/default-avatar.svg"
                class="
                  w-40
                  rounded-40
                  flex
                  items-end
                  hover:shadow-lg
                  transition-all
                  duration-200
                "
              />
              <img
                src="../assets/images/default-avatar.svg"
                class="
                  w-40
                  rounded-40
                  flex
                  items-end
                  hover:shadow-lg
                  transition-all
                  duration-200
                "
              />
              <img
                src="../assets/images/default-avatar.svg"
                class="
                  w-40
                  rounded-40
                  flex
                  items-end
                  hover:shadow-lg
                  transition-all
                  duration-200
                "
              />
            </div>
          </div> -->

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
import CardCategory from "../components/UI/CardCategory.vue";
import Card from "../components/UI/Card.vue";
import Hero from "../components/UI/Hero.vue";
import CardSkeleton from "../components/UI/CardSkeleton.vue";
import Sidebar from "../components/Layout/Sidebar.vue";
import Header from "../components/Layout/Header.vue";
import Footer from "../components/Layout/Footer.vue";
import { Icon } from "@iconify/vue";

export default {
  components: {
    HalamanProfil,
    CategoryButton,
    CardCategory,
    Card,
    Hero,
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
