<template>
  <footer class="w-full mt-20 bg-primary text-white">
    <div class="xl:px-40 pb-10 lg:px-20 md:px-10 sm:px-5 px-10">
      <div
        class="w-full pt-12 flex flex-col sm:flex-row space-y-2 justify-start"
      >
        <div class="w-full sm:w-4/5 flex flex-col space-y-4">
          <!-- logo footer -->
          <a href="/">
            <span class="dark:text-white text-white text-2xl font-bold"
              >BursaKerja</span
            >
          </a>
          <p class="opacity-60">
            Rancabang Estate, Jl. Rancabango, Perumahan, Kec. Tarogong Kaler,
            Kabupaten Garut, Jawa Barat 44151
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
