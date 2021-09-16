<template>
  <div>
    <div
      x-data="{ sidebarOpen: false, darkMode: false }"
      :class="{ dark: darkMode }"
    >
      <div class="flex h-screen bg-gray-50 dark:bg-gray-800">
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
          <main class="flex-1 overflow-x-hidden overflow-y-auto">
            <div class="container mx-auto m-8">
              <div class="grid">
                <!-- Halaman Profil -->
                <HalamanProfil />
                <router-view />
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
import Sidebar from "../components/Sidebar.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { Icon } from "@iconify/vue";

export default {
  components: {
    HalamanProfil,
    Sidebar,
    Header,
    Footer,
    Icon,
  },
};
</script>

<style scoped>
.searchbar:focus {
  width: 30rem;
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
