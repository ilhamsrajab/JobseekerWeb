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
          <div class="container flex-grow mx-auto sm:m-8 xs:m-4">
            <!-- kategori -->
            <div
              class="
                overflow-x-auto
                sm:mb-10
                xs:mb-6
                sm:mx-8
                xl:mx-0
                no-scrollbar
                rounded-lg
              "
            >
              <div class="space-x-2 inline-flex">
                <CategoryButton />
                <CategoryButton />
                <CategoryButton />
                <CategoryButton />
                <CategoryButton />
              </div>
            </div>

            <!-- filter button -->
            <div class="mb-5 sm:m-8 xs:m-1 xl:mx-0 flex justify-between">
              <span class="font-semibold dark:text-white dark:text-opacity-80"
                >Favorit</span
              >
              <button>
                <Icon
                  icon="fluent:filter-16-filled"
                  class="text-2xl dark:text-white dark:text-opacity-80"
                />
              </button>
            </div>

            <div
              class="
                grid
                xl:grid-cols-3
                md:grid-cols-2
                xs:grid-cols-1 xs:gap-6
                md:gap-6
                lg:gap-8
                xl:gap-10
                2xl:m-0
                sm:m-8
                xs:mx-1 xs:mt-6
              "
            >
              <!-- card -->

              <router-link :to="{ name: 'HalamanJobDescription' }">
                <Card />
              </router-link>
              <router-link :to="{ name: 'HalamanJobDescription' }">
                <Card />
              </router-link>
              <router-link :to="{ name: 'HalamanJobDescription' }">
                <Card />
              </router-link>
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
