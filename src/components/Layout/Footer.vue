<template>
  <footer class="w-full mt-8 bg-primary text-white">
    <div class="xl:px-40 pb-10 lg:px-20 md:px-10 sm:px-5 px-10">
      <div
        class="
          w-full
          pt-12
          flex
          xs:flex-col
          md:flex-row
          space-y-2
          justify-start
        "
      >
        <div class="w-full sm:w-4/5 flex flex-col space-y-4 mr-6 md:mr-4">
          <router-link :to="{ name: 'HalamanHome' }" class="w-40">
            <img
              src="../../assets/images/logo/BursaKerjaLogo_Black.svg"
              alt=""
              class="h-8"
            />
          </router-link>
          <!-- logo footer -->
          <p class="opacity-60">
            Rancabang Estate, Jl. Rancabango, Perumahan, Kec. Tarogong Kaler,
            Kabupaten Garut, Jawa Barat 44151
          </p>
          <a
            class="
              opacity-60
              flex flex-row
              items-center
              cursor-pointer
              hover:opacity-80
              transition-all
              duration-200
              w-36
            "
            href="tel:+0262431000"
          >
            <Icon
              icon="fluent:call-24-filled"
              :inline="true"
              class="mr-1"
            />(0262) 431000</a
          >
        </div>
        <!-- perusahaan -->
        <div class="md:w-1/5 xs:w-full flex flex-col space-y-4 lg:mx-6 md:mx-4">
          <span class="font-medium opacity-80 xs:mt-6 md:mt-0">
            Perusahaan
          </span>
          <hr />
          <a
            class="
              opacity-60
              flex flex-row
              items-center
              cursor-pointer
              hover:opacity-80
              transition-all
              duration-200
            "
            >Pasang iklan lowongan kerja</a
          >
        </div>
        <!-- media sosial -->
        <div class="md:w-1/5 xs:w-full flex flex-col space-y-4 lg:ml-6 md:mx-4">
          <span class="font-medium opacity-80 xs:mt-6 md:mt-0">
            Media Sosial
          </span>
          <hr />
          <a
            class="
              opacity-60
              flex flex-row
              items-center
              cursor-pointer
              hover:opacity-80
              transition-all
              duration-200
            "
            ><Icon
              icon="akar-icons:facebook-fill"
              :inline="true"
              class="mr-2"
            />Facebook</a
          >
          <a
            class="
              opacity-60
              flex flex-row
              items-center
              cursor-pointer
              hover:opacity-80
              transition-all
              duration-200
            "
            ><Icon
              icon="akar-icons:twitter-fill"
              :inline="true"
              class="mr-2"
            />Twitter</a
          >
          <a
            class="
              opacity-60
              flex flex-row
              items-center
              cursor-pointer
              hover:opacity-80
              transition-all
              duration-200
            "
            ><Icon
              icon="akar-icons:instagram-fill"
              :inline="true"
              class="mr-2"
            />Instagram</a
          >
        </div>
      </div>
      <div class="opacity-60 pt-2 mt-8 xs:text-center md:text-left">
        <p>© 2021</p>
      </div>
    </div>
  </footer>
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
* {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
