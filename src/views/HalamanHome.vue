<template>
  <div class="min-h-screen">
    <!-- topbar -->
    <div class="w-screen flex flex-row justify-between py-4 bg-primary fixed">
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
          "
          type="search"
          name="search"
          placeholder="Cari perusahaan atau kategori"
        />
        <button
          type="submit"
          class="absolute right-0 top-0 mt-3 mr-4 text-neutral"
        >
          <Icon icon="fluent:search-28-filled" :inline="true" />
        </button>
      </div>

      <!-- bar button user, notifikasi, dark mode -->
      <div class="w-64 mr-6 flex flex-row flex-none gap-4 justify-end">
        <!-- light mode -->
        <div class="group flex items-center">
          <button
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
        <div class="group flex items-center">
          <button
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
        <div class="group flex items-center">
          <button
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
      <div class="w-64 h-screen bg-white border-r">
        <nav class="mt-24">
          <!-- home -->
          <a
            class="
              flex
              items-center
              mxgit-2
              py-4
              px-4
              text-neutral
              rounded-large
              hover:bg-gray-100 hover:text-opacity-80
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
              mx-2
              py-4
              px-4
              text-neutral
              rounded-large
              hover:bg-gray-100 hover:text-opacity-80
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
              mx-2
              py-4
              px-4
              text-neutral
              rounded-large
              hover:bg-gray-100 hover:text-opacity-80
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

        <!-- bottom  -->
        <div
          class="
            w-64
            absolute
            bottom-0
            my-2
            cursor-default
            dropdown dropdown-top
            border-r
            hover:bg-gray-50
          "
        >
          <hr />
          <div tabindex="0" class="flex items-center mt-2 py-4 px-6">
            <img
              alt="avatar"
              class="w-14 rounded-full select-disabled"
              src="../assets/images/avatar.png"
            />
            <div class="leading-6 ml-4 select-disabled">
              <h4 class="font-semibold">Jerome Bell</h4>
              <h5 id="email" class="font-semibold text-gray-500 text-xs">
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
            "
          >
            <li>
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
          <!-- <a
            class="
              flex
              items-center
              mt-2
              py-4
              px-6
              bg-white
              border-r-4 border-white
              hover:bg-gray-100 hover:border-primary
            "
            href="#"
          >
            <Icon
              icon="fluent:bookmark-24-regular"
              :inline="true"
              class="text-xl"
            />

            <span class="mx-4 font-medium">Favorit</span>
          </a> -->
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
};
</script>

<style scoped>
.searchbar:focus {
  width: 30rem;
}

#email {
  display: block;
  width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
