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
        <div
          :class="
            sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'
          "
          class="
            fixed
            z-30
            inset-y-0
            left-0
            w-72
            transition
            duration-300
            transform
            bg-white
            dark:bg-gray-900
            overflow-y-auto
            lg:translate-x-0 lg:static lg:inset-0
          "
        >
          <!-- logo -->
          <div class="flex items-center justify-center py-5 bg-primary">
            <div class="flex items-center">
              <a href="/">
                <span class="dark:text-white text-white text-2xl font-bold"
                  >BursaKerja</span
                >
              </a>
            </div>
          </div>

          <!-- navigasi sidebar -->
          <nav class="flex flex-col mt-4 px-4 text-center">
            <a
              class="
                flex
                items-center
                my-1
                py-4
                px-4
                text-neutral
                rounded-large
                bg-purple-100
                hover:bg-gray-100 hover:text-opacity-80
                dark:text-white
                dark:hover:text-opacity-100
                dark:hover:bg-primary
                dark:hover:shadow-glowUngu
                transition-all
                duration-200
              "
              href="#"
            >
              <Icon
                icon="fluent:home-24-filled"
                :inline="true"
                class="text-xl"
              />

              <span class="mx-4 font-medium">Home</span>
            </a>

            <!-- cari kerja -->
            <a
              class="
                flex
                items-center
                my-1
                py-4
                px-4
                text-neutral
                rounded-large
                hover:bg-gray-100 hover:text-opacity-80
                dark:text-white
                dark:hover:text-opacity-100
                dark:hover:bg-primary
                transition-all
                duration-200
              "
              href="#"
            >
              <Icon
                icon="fluent:search-24-regular"
                :inline="true"
                class="text-xl"
              />

              <span class="mx-4 font-medium">Cari Kerja</span>
            </a>

            <!-- favorit -->
            <a
              class="
                flex
                items-center
                my-1
                py-4
                px-4
                text-neutral
                rounded-large
                hover:bg-gray-100 hover:text-opacity-80
                dark:text-white
                dark:hover:text-opacity-100
                dark:hover:bg-primary
                transition-all
                duration-200
              "
              href="#"
            >
              <Icon
                icon="fluent:bookmark-24-regular"
                :inline="true"
                class="text-xl"
              />

              <span class="mx-4 font-medium">Favorit</span>
            </a>
          </nav>

          <!-- profil icon -->
          <nav
            class="
              group
              mt-10
              px-4
              w-full
              absolute
              bottom-0
              pb-2
              cursor-default
              border-t
              dropdown dropdown-top
              dark:border-gray-900
              hover:bg-gray-50
              dark:hover:bg-gray-900
              transition-all
              duration-200
            "
          >
            <div
              tabindex="0"
              class="flex items-center mt-2 py-4 cursor-pointer"
            >
              <img
                alt="avatar"
                class="
                  w-14
                  rounded-full
                  select-disabled
                  group-hover:rotate-3
                  transform
                "
                src="../assets/images/avatar.png"
              />
              <div class="leading-6 ml-4 select-disabled bg-opacity-0">
                <h4 class="font-semibold dark:text-white">Jerome Bell</h4>
                <h5
                  id="email"
                  class="font-semibold text-gray-500 text-xs dark:text-gray-300"
                >
                  jeromebell24@gmail.com
                </h5>
              </div>
            </div>

            <!-- dropdown -->
            <ul
              tabindex="0"
              class="
                my-4
                p-2
                shadow-xl
                menu
                dropdown-content
                bg-none bg-opacity-20
                border
                rounded-box
                w-64
                text-sm
                dark:bg-gray-900
                dark:bg-opacity-100
                dark:border-gray-900
                dark:text-white
              "
            >
              <li class="">
                <a
                  ><Icon
                    icon="fluent:person-24-filled"
                    :inline="true"
                    class="text-xl mr-3"
                  />
                  <span> Profil </span>
                </a>
              </li>
              <li>
                <a>
                  <Icon
                    icon="fluent:sign-out-24-filled"
                    :inline="true"
                    class="text-xl mr-3"
                  />

                  <span> Log Out </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <!-- header -->
        <div class="flex-1 flex flex-col overflow-hidden">
          <header
            class="flex justify-between items-center px-6 py-4 bg-primary"
          >
            <div class="flex items-center space-x-4 lg:space-x-0">
              <button
                @click="sidebarOpen = true"
                class="
                  text-gray-500
                  dark:text-gray-300
                  focus:outline-none
                  lg:hidden
                "
              >
                <svg
                  class="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6H20M4 12H20M4 18H11"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>

              <!-- search bar -->
              <div class="relative flex flex-row">
                <input
                  class="
                    searchbar
                    h-10
                    px-5
                    pr-10
                    w-96
                    rounded-large
                    text-sm
                    border-0
                    hover:shadow-soft
                    focus:ring-secondary focus:ring-opacity-80 focus:shadow-soft
                    transition-all
                    duration-200
                    dark:focus:ring-primary dark:bg-gray-800 dark:text-gray-400
                  "
                  type="search"
                  name="search"
                  placeholder="Cari perusahaan atau kategori"
                />
                <button
                  type="submit"
                  class="
                    absolute
                    right-0
                    top-0
                    mt-3
                    mr-4
                    text-neutral
                    dark:text-gray-500 dark:focus:text-gray-400
                  "
                >
                  <Icon icon="fluent:search-28-filled" :inline="true" />
                </button>
              </div>
            </div>

            <!-- button notifikasi dan dark mode -->
            <div class="flex items-center space-x-4">
              <!-- light mode -->
              <div class="group flex items-center" v-show="modeCerah">
                <button
                  v-on:Click="lightMode"
                  class="
                    px-1
                    py-1
                    group-hover:bg-accent group-hover:shadow-glow
                    rounded-full
                    transition-all
                    duration-200
                  "
                >
                  <Icon
                    icon="fluent:weather-sunny-24-filled"
                    class="text-xl text-white group-hover:text-neutral"
                  />
                </button>
              </div>

              <!-- dark mode -->
              <div class="group flex items-center" v-show="modeGelap">
                <button
                  v-on:Click="darkMode"
                  class="
                    px-1
                    py-1
                    group-hover:bg-accent group-hover:shadow-glow
                    rounded-full
                    transition-all
                    duration-200
                  "
                >
                  <Icon
                    icon="fluent:weather-moon-24-filled"
                    class="text-xl text-white group-hover:text-neutral"
                  />
                </button>
              </div>

              <!-- notifikasi -->
              <div class="group flex items-center dropdown">
                <button
                  tabindex="1"
                  class="
                    indicator
                    px-1
                    py-1
                    group-hover:bg-accent group-hover:shadow-glow
                    rounded-full
                    transition-all
                    duration-200
                  "
                >
                  <!-- indicator -->
                  <span
                    class="
                      w-2
                      h-2
                      bg-accent
                      absolute
                      top-0
                      right-0
                      rounded-full
                      shadow-lg
                    "
                  ></span>
                  <Icon
                    icon="fluent:alert-24-filled"
                    class="text-xl text-white group-hover:text-neutral"
                  />
                </button>
                <ul
                  tabindex="1"
                  class="
                    top-6
                    right-0
                    my-4
                    p-2
                    shadow-xl
                    menu
                    dropdown-content
                    bg-white
                    border
                    rounded-box
                    w-96
                    text-sm
                    dark:bg-gray-900 dark:border-gray-900 dark:text-white
                  "
                >
                  <li
                    id="notif"
                    class="rounded-large px-5 py-3 hover:bg-gray-200"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                    necessitatibus nemo dolores.
                  </li>
                  <hr class="my-2" />

                  <li class="">
                    <a class="text-primary active:text-white rounded-large">
                      Lihat lainnya..
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </header>

          <!-- main page -->
          <main class="flex-1 overflow-x-hidden overflow-y-auto">
            <div class="container mx-auto m-8">
              <div
                class="
                  grid
                  place-items-center
                  h-96
                  text-gray-500
                  dark:text-gray-300
                  text-xl
                  border-4 border-gray-300 border-dashed
                "
                style="height: 1000px"
              >
                Content
              </div>
            </div>
          </main>

          <!-- footer -->
          <footer>
            <div class="w-full bg-primary text-white">
              <div class="xl:px-40 pb-10 lg:px-20 md:px-10 sm:px-5 px-10">
                <div
                  class="
                    w-full
                    pt-12
                    flex flex-col
                    sm:flex-row
                    space-y-2
                    justify-start
                  "
                >
                  <div class="w-full sm:w-4/5 flex flex-col space-y-4">
                    <!-- logo footer -->
                    <a href="/">
                      <span
                        class="dark:text-white text-white text-2xl font-bold"
                        >BursaKerja</span
                      >
                    </a>
                    <p class="opacity-60">
                      Rancabang Estate, Jl. Rancabango, Perumahan, Kec. Tarogong
                      Kaler, Kabupaten Garut, Jawa Barat 44151
                    </p>
                    <p class="opacity-60">(0262) 431000</p>
                  </div>
                  <div class="w-full sm:w-1/5 flex flex-col space-y-4">
                    <a class="opacity-60 flex flex-row items-center"
                      ><Icon
                        icon="akar-icons:facebook-fill"
                        :inline="true"
                        class="mr-2"
                      />Facebook</a
                    >
                    <a class="opacity-60 flex flex-row items-center"
                      ><Icon
                        icon="akar-icons:twitter-fill"
                        :inline="true"
                        class="mr-2"
                      />Twitter</a
                    >
                    <a class="opacity-60 flex flex-row items-center"
                      ><Icon
                        icon="akar-icons:instagram-fill"
                        :inline="true"
                        class="mr-2"
                      />Instagram</a
                    >
                  </div>
                </div>
                <div class="opacity-60 pt-2">
                  <p>© 2021</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      modeCerah: true,
      modeGelap: false,
    };
  },
  methods: {
    lightMode() {
      this.modeCerah = false;
      this.modeGelap = true;
    },
    darkMode() {
      this.modeCerah = true;
      this.modeGelap = false;
    },
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
