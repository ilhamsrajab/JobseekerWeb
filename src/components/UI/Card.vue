<template>
  <!-- card -->
  <div
    class="
      flex flex-col
      place-content-between
      group
      bg-white
      rounded-large
      cursor-pointer
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
              w-20
              h-20
              object-cover
              rounded-large
              shadow-xl
              transition-all
              duration-200
              mr-4
            "
          />
          <div>
            <div class="flex flex-wrap">
              <h2 class="flex-auto text-lg font-bold">Nama Perusahaan</h2>

              <div
                class="w-full flex-none text-sm text-gray-400 font-normal mt-1"
              >
                Kategori Pekerjaan
              </div>
            </div>
          </div>
        </div>

        <!-- button bookmark -->
        <div class="">
          <button>
            <Icon
              icon="fluent:bookmark-add-24-filled"
              :inline="true"
              class="text-3xl hover:text-merah"
            />
          </button>
        </div>
      </div>

      <!-- text -->
      <div class="mt-6">
        <div class="flex flex-row items-center">
          <div class="flex-auto">
            <div class="font-semibold">Posisi Kerja</div>
            <div class="text-gray-400 mt-1 text-sm">
              Rp. 1.000.000 - Rp. 4.000.000
            </div>
          </div>
          <div
            class="
              text-xs
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

        <div class="mt-4 text-sm text-gray-600 leading-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non nemo
          suscipit nostrum optio in temporibus officiis libero culpa esse,
          excepturi?
        </div>
      </div>
    </div>

    <div class="flex flex-row justify-between items-center mt-6 text-gray-400">
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
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
};
</script>
