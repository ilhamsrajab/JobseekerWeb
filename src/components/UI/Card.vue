<template>
  <div class="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
    <!-- card -->
    <div
      class="
        bg-white
        rounded-large
        shadow-lg
        hover:shadow-xl
        cursor-pointer
        p-5
        transition-all
        duration-200
      "
    >
      <div class="flex justify-between">
        <div class="flex flex-row items-start">
          <img
            src="https://images.unsplash.com/photo-1622180203374-9524a54b734d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
            alt="Logo"
            class="
              w-20
              object-scale-down
              lg:object-cover lg:h-20
              rounded-large
              shadow-xl
              mr-4
            "
          />
          <div>
            <div class="flex flex-wrap">
              <h2 class="flex-auto text-lg font-bold">Nama Perusahaan</h2>

              <div
                class="w-full flex-none text-sm text-gray-400 font-medium mt-1"
              >
                Kategori Pekerjaan
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <button>
            <Icon
              icon="fluent:bookmark-24-regular"
              :inline="true"
              class="text-3xl"
            />
          </button>
        </div>
      </div>

      <!-- text -->
      <div class="mt-6">
        <div class="flex flex-row items-center">
          <div class="flex-auto">
            <div class="font-semibold">Posisi Kerja</div>
            <div class="text-gray-500 mt-1">Rp. 1.000.000 - Rp. 4.000.000</div>
          </div>
          <div
            class="
              text-gray-400 text-xs
              bg-hijau
              text-hijauDark
              p-2
              rounded-full
              w-20
              text-center
              font-semibold
            "
          >
            Full Time
          </div>
        </div>

        <div class="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
          adipisci veniam temporibus nulla dignissimos rem, modi saepe nemo
          necessitatibus voluptates consequatur? dignissimos rem, modi saepe
          nemo...
        </div>
      </div>
      <div
        class="flex flex-row justify-between items-center mt-6 text-gray-500"
      >
        <span class="inline-flex items-center align-top space-x-1">
          <Icon icon="fluent:location-24-filled" :inline="true" />
          <p class="">Lokasi</p>
        </span>
        <span class="inline-flex items-center align-top space-x-1">
          <Icon icon="fluent:clock-24-filled" :inline="true" />
          <p class="">Waktu</p>
        </span>
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
