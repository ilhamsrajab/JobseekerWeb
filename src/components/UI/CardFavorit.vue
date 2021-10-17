<template>
  <router-link :to="{ name: 'HalamanJobDescription' }">
    <!-- card -->
    <div
      class="
        flex flex-col
        place-content-between
        group
        bg-white
        dark:bg-gray-900
        rounded-large
        cursor-pointer
        hover:shadow-xl
        duration-200
        transition-all
        p-5
      "
    >
      <div>
        <div class="flex justify-between">
          <div class="flex flex-row items-start">
            <img
              src="https://images.unsplash.com/photo-1622180203374-9524a54b734d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
              alt="Logo"
              class="
                sm:w-20 sm:h-20
                xs:w-12 xs:h-12
                object-cover
                lg:rounded-large
                md:rounded-large
                sm:rounded-large
                xs:rounded-lg
                shadow-xl
                transition-all
                duration-200
                mr-4
              "
            />
            <div>
              <div class="flex flex-wrap">
                <h2
                  class="
                    flex-auto
                    text-lg
                    font-bold
                    dark:text-white dark:text-opacity-80
                  "
                >
                  Nama Perusahaan
                </h2>

                <div
                  class="
                    w-full
                    flex-none
                    text-sm text-gray-400
                    font-normal
                    mt-1
                  "
                >
                  Kategori Pekerjaan
                </div>
              </div>
            </div>
          </div>

          <!-- button bookmark -->
          <div class="">
            <button>
              <div
                id="iconBookmark"
                class="
                  text-3xl text-merah
                  dark:text-white dark:text-opacity-80
                  hover:text-neutral
                  dark:hover:text-white
                  transition-all
                  duration-200
                "
              ></div>
            </button>
          </div>
        </div>

        <!-- text -->
        <div class="mt-6">
          <div class="flex flex-row items-center">
            <div class="flex-auto">
              <div class="font-semibold dark:text-white dark:text-opacity-80">
                Posisi Kerja
              </div>
              <div class="text-gray-400 mt-1 text-sm">
                Rp. 1.000.000 - Rp. 4.000.000
              </div>
            </div>
            <div class="badge-fulltime">Full Time</div>
          </div>

          <div
            class="
              mt-4
              text-sm text-gray-600
              leading-6
              dark:text-white dark:text-opacity-80
            "
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non nemo
            suscipit nostrum optio in temporibus officiis libero culpa esse,
            excepturi?
          </div>
        </div>
      </div>

      <div
        class="flex flex-row justify-between items-center mt-6 text-gray-400"
      >
        <span class="inline-flex items-center align-top space-x-1">
          <Icon icon="fluent:location-24-filled" :inline="true" />
          <p class="text-sm">Lokasi</p>
        </span>
        <span class="inline-flex items-center align-top space-x-1">
          <Icon icon="fluent:clock-24-filled" :inline="true" />
          <p class="text-sm">Waktu</p>
        </span>
      </div>
    </div>
  </router-link>
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
#iconBookmark {
  height: 1.875rem;
  color: #f6a9a9;
  transition-duration: 200ms;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  content: url("https://api.iconify.design/fluent/bookmark-24-filled.svg?color=%23f6a9a9");
}
#iconBookmark:hover {
  height: 1.875rem;
  transition-duration: 200ms;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  content: url("../../assets/icons/bookmark-remove-24-filled.svg");
}
.dark #iconBookmark:hover {
  height: 1.875rem;
  transition-duration: 200ms;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  content: url("../../assets/icons/bookmark-remove-24-filled-putih.svg");
}
</style>
