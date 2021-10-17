<template>
  <!-- container -->
  <div
    class="
      min-h-screen
      bg-gray-100
      dark:bg-gray-800
      flex
      justify-center
      items-center
    "
  >
    <!-- kotak -->
    <div
      class="
        kotak
        bg-primary bg-header
        shadow-2xl
        hover:shadow-3xl
        rounded-40
        flex
        2xl:w-7/12
        lg:flex-row lg:w-9/12
        md:m-8
        sm:flex-col sm:w-11/12
        xs:w-screen xs:h-screen
        p-2
      "
    >
      <!-- bagian kiri -->
      <div
        class="
          bagianKiri
          text-white
          px-5
          flex flex-col
          justify-end
          items-center
          xl:w-11/12
          lg:order-1 lg:w-10/12 lg:inline-flex
          xs:w-8/12 xs:hidden xs:order-2
        "
      >
        <vue-carousel
          :data="data"
          :controls="false"
          indicator-type="disc"
          class="m-5 items-end"
        ></vue-carousel>
      </div>

      <!-- bagian kanan  -->
      <div
        class="
          bagiankanan
          bg-white
          dark:bg-gray-800
          shadow-2xl
          rounded-40
          xl:w-6/12
          lg:w-10/12 lg:hover:scale-105 lg:order-2
          md:p-8
          sm:p-10
          xs:w-full xs:p-6 xs:order-1
          z-10
          transform
          overflow-y-auto
          transition-all
          duration-200
        "
      >
        <!-- daftar -->
        <signUp id="signUp" />
        <!-- end of daftar -->
      </div>
    </div>
  </div>
</template>

<script>
import signUp from "../components/Form/FormDaftar.vue";
import VueCarousel from "@chenfengyuan/vue-carousel";
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
    signUp,
    VueCarousel,
  },
  data() {
    return {
      data: [
        "<div class='text-center mb-10 font-medium'>Cari kerja dengan mudah disini, karena terhubung dengan ratusan perusahaan yang tergabung.</div>",
        "<div class='text-center mb-10 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quidem dolorem.</div>",
        "<div class='text-center mb-10 font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim illum quasi eaque, repudiandae quidem doloremque. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</div>",
      ],
    };
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

.kotak {
  height: 650px;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.bagiankanan::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.bagiankanan {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

@media only screen and (max-width: 339px) {
  .kotak {
    height: 100%;
  }
}

@media only screen and (max-height: 768px) {
  .kotak {
    height: 550px;
  }
}
</style>
