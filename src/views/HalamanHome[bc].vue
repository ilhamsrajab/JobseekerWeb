<template>
  <div class="min-h-screen dark:bg-gray-700">
    <!-- topbar -->
    <div
      class="
        fixed
        z-20
        w-screen
        flex flex-row
        justify-between
        py-4
        bg-primary
        dark:bg-gray-900
      "
    >
      <!-- header left -->
      <div class="w-64 pl-6 flex flex-none items-center text-white">
        <!-- Burger menu -->
        <div class="text-2xl mr-3">
          <button class="flex flex-row">
            <Icon icon="fluent:line-horizontal-3-20-filled" />
          </button>
        </div>
        <!-- logo -->
        <div class="text-xl font-bold">BursaKerja</div>
      </div>

      <!-- search bar -->
      <div class="ml-6 relative flex flex-row flex-grow-1">
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
            focus:ring-2
            focus:ring-white
            focus:ring-opacity-80
            focus:shadow-soft
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

      <!-- bar button user, notifikasi, dark mode -->
      <div class="w-64 mr-6 flex flex-row gap-4 justify-end">
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
            <li id="notif" class="rounded-large px-5 py-3 hover:bg-gray-200">
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

        <!-- profil -->
        <!-- <div class="group flex items-center">
          <button
            class="
              px-1
              py-1
              group-hover:bg-accent
              rounded-full
              transition-all
              duration-200
            "
          >
            <Icon
              icon="fluent:person-24-filled"
              class="text-xl text-white group-hover:text-neutral"
            />
          </button>
        </div> -->
      </div>
    </div>

    <div class="flex flex-col sm:flex-row sm:justify-start">
      <!-- sidebar -->
      <div
        class="
          opacity-50
          fixed
          z-10
          w-64
          h-screen
          bg-white
          border-r
          dark:border-gray-900 dark:bg-gray-800
        "
      >
        <nav class="mt-24">
          <!-- home -->
          <a
            class="
              flex
              items-center
              m-2
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
            <Icon icon="fluent:home-24-filled" :inline="true" class="text-xl" />

            <span class="mx-4 font-medium">Home</span>
          </a>

          <!-- cari kerja -->
          <a
            class="
              flex
              items-center
              m-2
              py-4
              px-4
              text-neutral
              rounded-large
              hover:bg-gray-100 hover:text-opacity-80
              dark:text-white dark:hover:text-opacity-100 dark:hover:bg-primary
              transition-all
              duration-200
            "
            href="#"
          >
            <Icon
              icon="fluent:search-24-filled"
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
              m-2
              py-4
              px-4
              text-neutral
              rounded-large
              hover:bg-gray-100 hover:text-opacity-80
              dark:text-white dark:hover:text-opacity-100 dark:hover:bg-primary
              transition-all
              duration-200
            "
            href="#"
          >
            <Icon
              icon="fluent:bookmark-24-filled"
              :inline="true"
              class="text-xl"
            />

            <span class="mx-4 font-medium">Favorit</span>
          </a>
        </nav>

        <!-- bottom  -->
        <div
          class="
            w-64
            absolute
            bottom-0
            pb-2
            cursor-default
            dropdown dropdown-top
            border-r
            dark:border-gray-900
            hover:bg-gray-50
            dark:hover:bg-gray-900
            transition-all
            duration-200
          "
        >
          <hr class="dark:border-gray-900" />
          <div
            tabindex="0"
            class="flex items-center mt-2 py-4 px-6 cursor-pointer"
          >
            <img
              alt="avatar"
              class="w-14 rounded-full select-disabled"
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
          <ul
            tabindex="0"
            class="
              m-4
              p-2
              shadow-xl
              menu
              dropdown-content
              bg-none bg-opacity-20
              border
              rounded-box
              w-56
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
        </div>
      </div>
      <!-- main -->
      <div class="my-24 mx-10 max-w-full bg-pink-200">
        <div>asd</div>

        <!-- <div
          class="
            bg-white
            w-screen
            overflow-auto
            whitespace-no-wrap
            py-3
            px-4
            text-center
          "
        >
          <button
            class="
              inline-block
              border border-teal-500
              text-teal-500
              rounded-full
              px-6
              py-2
              mr-4
            "
          >
            Button 1
          </button>
          <button
            class="
              inline-block
              border border-teal-500
              text-teal-500
              rounded-full
              px-6
              py-2
              mr-4
            "
          >
            Button 2
          </button>
          <button
            class="
              inline-block
              border border-teal-500
              text-teal-500
              rounded-full
              px-6
              py-2
              mr-4
            "
          >
            Button 3
          </button>
          <button
            class="
              inline-block
              border border-teal-500
              text-teal-500
              rounded-full
              px-6
              py-2
              mr-4
            "
          >
            Button 4
          </button>
          <button
            class="
              inline-block
              border border-teal-500
              text-teal-500
              rounded-full
              px-6
              py-2
              mr-4
            "
          >
            Button 5
          </button>
          <button
            class="
              inline-block
              border border-teal-500
              text-teal-500
              rounded-full
              px-6
              py-2
              mr-4
            "
          >
            Button 6
          </button>
          <button
            class="
              inline-block
              border border-teal-500
              text-teal-500
              rounded-full
              px-6
              py-2
              mr-4
            "
          >
            Button 7
          </button>
          <button
            class="
              inline-block
              border border-teal-500
              text-teal-500
              rounded-full
              px-6
              py-2
              mr-4
            "
          >
            Button 8
          </button>
          <button
            class="
              inline-block
              border border-teal-500
              text-teal-500
              rounded-full
              px-6
              py-2
              mr-4
            "
          >
            Button 9
          </button>
          <button
            class="
              inline-block
              border border-teal-500
              text-teal-500
              rounded-full
              px-6
              py-2
            "
          >
            Button 10
          </button>
        </div> -->
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
  width: 9rem;
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
