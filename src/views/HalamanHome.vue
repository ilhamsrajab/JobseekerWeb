<template>
  <!-- <Loading /> -->
  <div class="drawer drawer-mobile h-screen bg-gray-100 dark:bg-gray-800">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

    <div class="drawer-content flex-1 flex flex-col overflow-hidden">
      <!-- header -->
      <Header />

      <!-- main page -->
      <main class="flex flex-col h-screen overflow-x-hidden overflow-y-auto">
        <!-- hero -->
        <Hero />

        <!-- end hero -->

        <!-- kategori pekerjaan -->
        <div class="lg:m-8 sm:m-6 xs:m-4">
          <div class="flex justify-between">
            <span
              class="
                sm:text-xl
                xs:text-lg
                font-semibold
                dark:text-white dark:text-opacity-80
              "
            >
              Kategori pekerjaan
            </span>
            <router-link :to="{ name: 'HalamanCariKerja' }">
              <button class="badge">Lihat lainnya</button>
            </router-link>
          </div>
          <!-- kategori 1 -->
          <div
            class="
              grid grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-3 xl:gap-6
              2xl:grid-cols-5 2xl:gap-8
              lg:gap-6
              xs:gap-4
              mt-5
            "
          >
            <!-- <CardCategory class="md:col-span-2 lg:col-span-2 xl:col-span-1" /> -->
            <div
              class="
                bg-teknologi bg-cover
                2xl:col-span-1
                xl:col-span-2
                lg:col-span-2
                md:col-span-2 md:rounded-40
                xs:rounded-20
                overflow-hidden
              "
            >
              <div
                class="
                  md:h-96
                  xs:h-52
                  bg-black bg-opacity-0
                  hover:bg-opacity-40
                  p-8
                  flex
                  items-end
                  cursor-pointer
                  hover:shadow-lg
                  transition-all
                  duration-200
                "
              >
                <span class="font-semibold text-lg text-white">
                  Teknologi
                </span>
              </div>
            </div>
            <!-- end of kategori 1 -->

            <!-- kategori 2 -->
            <div
              class="
                rounded-40
                bg-koki bg-cover
                md:rounded-40
                xs:rounded-20
                overflow-hidden
              "
            >
              <div
                class="
                  md:h-96
                  xs:h-52
                  bg-black bg-opacity-0
                  hover:bg-opacity-40
                  p-8
                  flex
                  items-end
                  cursor-pointer
                  hover:shadow-lg
                  transition-all
                  duration-200
                "
              >
                <span class="font-semibold text-lg text-white"> Chef </span>
              </div>
            </div>
            <!-- end of kategori 2 -->

            <!-- kategori 3 -->
            <div
              class="
                rounded-40
                bg-pendidikan bg-cover
                md:rounded-40
                xs:rounded-20
                overflow-hidden
              "
            >
              <div
                class="
                  md:h-96
                  xs:h-52
                  bg-black bg-opacity-0
                  hover:bg-opacity-40
                  p-8
                  flex
                  items-end
                  cursor-pointer
                  hover:shadow-lg
                  transition-all
                  duration-200
                "
              >
                <span class="font-semibold text-lg text-white">
                  Pendidikan
                </span>
              </div>
            </div>
            <!-- end of kategori 3 -->

            <!-- kategori 4 -->
            <div
              class="
                rounded-40
                bg-supir bg-cover
                md:rounded-40
                xs:rounded-20
                overflow-hidden
              "
            >
              <div
                class="
                  md:h-96
                  xs:h-52
                  bg-black bg-opacity-0
                  hover:bg-opacity-40
                  p-8
                  flex
                  items-end
                  cursor-pointer
                  hover:shadow-lg
                  transition-all
                  duration-200
                "
              >
                <span class="font-semibold text-lg text-white"> Driver </span>
              </div>
            </div>
            <!-- end of kategori 4 -->

            <!-- kategori 5 -->
            <div
              class="
                rounded-40
                bg-jasa bg-cover
                md:rounded-40
                xs:rounded-20
                overflow-hidden
              "
            >
              <div
                class="
                  md:h-96
                  xs:h-52
                  bg-black bg-opacity-0
                  hover:bg-opacity-40
                  p-8
                  flex
                  items-end
                  cursor-pointer
                  hover:shadow-lg
                  transition-all
                  duration-200
                "
              >
                <span class="font-semibold text-lg text-white"> Jasa </span>
              </div>
            </div>
            <!-- end of kategori 5 -->
          </div>
        </div>
        <!-- end kategori pekerjaan -->

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
import CardCategory from "../components/UI/CardCategory.vue";
import Loading from "../components/UI/Loading.vue";
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
    Loading,
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
