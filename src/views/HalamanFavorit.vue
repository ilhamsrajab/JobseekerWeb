<template>
  <div class="drawer drawer-mobile h-screen bg-gray-100 dark:bg-gray-800">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

    <div class="drawer-content flex-1 flex flex-col overflow-hidden">
      <!-- header -->
      <Header />

      <!-- main page -->
      <main class="flex flex-col h-screen overflow-x-hidden overflow-y-auto">
        <div class="flex-grow mx-auto w-full">
          <!-- kategori -->
          <div
            class="overflow-x-auto lg:m-8 sm:m-6 xs:m-4 no-scrollbar rounded-lg"
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
          <!-- end of kategori -->

          <!-- title and filter button -->
          <div class="lg:m-8 sm:m-6 xs:m-4 flex justify-between">
            <span class="font-semibold dark:text-white dark:text-opacity-80"
              >Favorit</span
            >
            <div class="dropdown dropdown-end">
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
              <Filter />
            </div>
          </div>
          <!-- end of title and filter button -->

          <!-- card -->
          <div
            class="
              grid
              2xl:grid-cols-3
              xl:grid-cols-2 xl:gap-8
              lg:m-8 lg:gap-8
              md:grid-cols-2 md:gap-6
              sm:m-6
              xs:grid-cols-1 xs:gap-6 xs:m-4
            "
          >
            <CardFavorit />
            <CardFavorit />
            <CardFavorit />
            <!-- <Modal /> -->

            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
          <!-- end of card -->
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
import HalamanProfil from "../views/HalamanProfil.vue";
import CategoryButton from "../components/UI/CategoryButton.vue";
import CardFavorit from "../components/UI/CardFavorit.vue";
import Filter from "../components/UI/Filter.vue";
import CardSkeleton from "../components/UI/CardSkeleton.vue";
import Sidebar from "../components/Layout/Sidebar.vue";
import Header from "../components/Layout/Header.vue";
import Footer from "../components/Layout/Footer.vue";
import { Icon } from "@iconify/vue";

export default {
  components: {
    HalamanProfil,
    CategoryButton,
    CardFavorit,
    Filter,
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
