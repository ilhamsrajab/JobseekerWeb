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
          <!-- hero -->
          <div class="hero my-8">
            <!-- container -->
            <div class="mx-8">
              <!-- hero wrapper -->
              <div
                class="
                  hero-wrapper
                  grid grid-cols-1
                  md:grid-cols-12
                  xl:gap-8
                  md:gap-0
                  items-center
                  bg-gradient-to-br
                  from-blue-200
                  to-blue-300
                  md:px-10 md:py-5
                  xl:px-20
                  rounded-40
                "
              >
                <!-- hero text -->
                <div class="hero-text col-span-6 ml-10">
                  <h1
                    class="
                      font-bold
                      text-4xl
                      md:text-5xl md:mt-12
                      max-w-xl
                      text-neutral
                      leading-14
                    "
                  >
                    Cari kerja dengan mudah disini.
                  </h1>
                  <div
                    class="
                      xl:w-56
                      md:w-32
                      h-2
                      bg-primary bg-opacity-80
                      rounded-full
                      mt-10
                    "
                  ></div>
                  <p class="text-base leading-relaxed mt-10 font-semibold">
                    Terhubung dengan berbagai jenis pekerjaan.
                  </p>

                  <!-- playstore -->

                  <button
                    class="
                      mt-10
                      bg-white
                      shadow-lg
                      px-10
                      py-4
                      rounded-20
                      hover:shadow-xl hover:-translate-y-1
                      flex
                      items-center
                      space-x-4q
                      md:text-5xl md:mb-12
                      transform
                      transition-all
                      duration-200
                    "
                  >
                    <div class="image">
                      <svg
                        class="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        width="436.057"
                        height="469.847"
                        viewBox="0 0 436.057 469.847"
                      >
                        <g transform="translate(-16.896)">
                          <path
                            d="M270.336,234.965,34.39,462.165A40.146,40.146,0,0,1,16.9,428.672V41.258A40.146,40.146,0,0,1,34.39,7.765Z"
                            fill="#2196f3"
                          />
                          <path
                            d="M352.9,155.6l-82.56,79.36L34.39,7.765a31.446,31.446,0,0,1,2.773-1.92A40.363,40.363,0,0,1,77.91,5.2Z"
                            fill="#4caf50"
                          />
                          <path
                            d="M452.95,234.965a40.791,40.791,0,0,1-21.333,36.267L352.9,314.325l-82.56-79.36L352.9,155.6l78.72,43.093A40.791,40.791,0,0,1,452.95,234.965Z"
                            fill="#ffc107"
                          />
                          <path
                            d="M352.9,314.325,77.91,464.725a40.9,40.9,0,0,1-40.747-.64,31.44,31.44,0,0,1-2.773-1.92l235.947-227.2Z"
                            fill="#f44336"
                          />
                        </g>
                      </svg>
                    </div>
                    <div class="text">
                      <p class="text-xs text-gray-600">Download it from</p>
                      <p class="text-base font-semibold text-gray-900">
                        Google Play
                      </p>
                    </div>
                  </button>
                </div>

                <!-- hero image -->
                <div class="hero-image col-span-6">
                  <img
                    src="../assets/images/heroimage.png"
                    alt="hero_image"
                    class="mb-5 animate-bounce5 transform rotate-180"
                    draggable="false"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- end hero -->

          <!-- kategori pekerjaan -->
          <div class="m-8">
            <span class="text-xl font-semibold"> Kategori pekerjaan </span>
            <button class="ml-3 badge h-6">Lihat lainnya</button>
            <div class="grid grid-cols-5 gap-8 mt-5">
              <div
                class="
                  h-96
                  rounded-40
                  p-8
                  bg-cover
                  flex
                  items-end
                  cursor-pointer
                  bg-tech
                  hover:shadow-lg
                  transition-all
                  duration-200
                "
              >
                <span class="font-semibold text-lg text-white">
                  Teknologi
                </span>
              </div>
              <div
                class="
                  h-96
                  rounded-40
                  p-8
                  bg-cover
                  flex
                  items-end
                  cursor-pointer
                  bg-tech
                  hover:shadow-lg
                  transition-all
                  duration-200
                "
              >
                <span class="font-semibold text-lg text-white">
                  Teknologi
                </span>
              </div>
              <div
                class="
                  h-96
                  rounded-40
                  p-8
                  bg-cover
                  flex
                  items-end
                  cursor-pointer
                  bg-tech
                  hover:shadow-lg
                  transition-all
                  duration-200
                "
              >
                <span class="font-semibold text-lg text-white">
                  Teknologi
                </span>
              </div>
              <div
                class="
                  h-96
                  rounded-40
                  p-8
                  bg-cover
                  flex
                  items-end
                  cursor-pointer
                  bg-tech
                  hover:shadow-lg
                  transition-all
                  duration-200
                "
              >
                <span class="font-semibold text-lg text-white">
                  Teknologi
                </span>
              </div>
              <div
                class="
                  h-96
                  rounded-40
                  p-8
                  bg-cover
                  flex
                  items-end
                  cursor-pointer
                  bg-tech
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
