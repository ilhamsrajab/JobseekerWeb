<template>
  <router-link :to="deskripsiLink">
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
                  {{ namaPerusahaan }}
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
                  {{ kategoriPekerjaan }}
                </div>
              </div>
            </div>
          </div>

          <!-- button bookmark -->
          <div class="">
            <router-link :to="{ name: 'HalamanFavorit' }">
              <button>
                <Icon
                  icon="fluent:bookmark-add-24-filled"
                  :inline="true"
                  class="
                    text-3xl
                    hover:text-merah
                    dark:hover:text-merah dark:text-white dark:text-opacity-80
                    transition-all
                    duration-200
                  "
                />
              </button>
            </router-link>
          </div>
        </div>

        <!-- text -->
        <div class="mt-6">
          <div class="flex flex-row items-center">
            <div class="flex-auto">
              <div class="font-semibold dark:text-white dark:text-opacity-80">
                {{ posisi }}
              </div>
              <div class="text-gray-400 mt-1 text-sm">
                Rp. {{ kisaranGaji }}
              </div>
            </div>
            <div class="badge-fulltime">{{ jenisPekerjaan }}</div>
          </div>

          <div
            class="
              mt-4
              text-sm text-gray-600
              leading-6
              dark:text-white dark:text-opacity-80
            "
          >
            {{ deskripsiPekerjaan }}
          </div>
        </div>
      </div>

      <div
        class="flex flex-row justify-between items-center mt-6 text-gray-400"
      >
        <span class="inline-flex items-center align-top space-x-1">
          <Icon icon="fluent:location-24-filled" :inline="true" />
          <p class="text-sm">{{ lokasiPenempatan }}</p>
        </span>
        <span class="inline-flex items-center align-top space-x-1">
          <Icon icon="fluent:clock-24-filled" :inline="true" />
          <p class="text-sm">{{ deadlinePendaftaran }}</p>
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
  props: [
    "id",
    "namaPerusahaan",
    "kisaranGaji",
    "posisi",
    "lokasiPenempatan",
    "deskripsiPekerjaan",
    "kategoriPekerjaan",
    "deadlinePendaftaran",
    "jenisPekerjaan",
  ],
  computed: {
    // deskripsi
    deskripsiLink() {
      return this.$route.path + "/" + this.id + "/deskripsi";
    },
    // loker
    namaPerusahaan() {
      return this.namaPerusahaan;
    },
    kisaranGaji() {
      return this.kisaranGaji;
    },
    lokasiPenempatan() {
      return this.lokasiPenempatan;
    },
    posisi() {
      return this.posisi;
    },
    deskripsiPekerjaan() {
      return this.deskripsiPekerjaan;
    },
    kategoriPekerjaan() {
      return this.kategoriPekerjaan;
    },
    deadlinePendaftaran() {
      return this.deadlinePendaftaran;
    },
    jenisPekerjaan() {
      return this.jenisPekerjaan;
    },
  },
};
</script>
