<template>
  <div>
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
          <main
            class="flex flex-col h-screen overflow-x-hidden overflow-y-auto"
          >
            <div class="container flex-grow mx-auto m-8">
              <CategoryButton class="mb-10 mx-8 xl:mx-0" />
              <div
                class="
                  grid
                  xl:grid-cols-3
                  md:grid-cols-2
                  sm:grid-cols-1
                  gap-10
                  xl:m-0
                  m-8
                "
              >
                <!-- Halaman Profil -->
                <!-- <HalamanProfil /> -->
                <Card />
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
