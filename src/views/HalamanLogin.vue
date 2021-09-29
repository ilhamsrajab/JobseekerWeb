<template>
  <!-- container -->
  <div class="min-h-screen bg-gray-100 flex justify-center items-center">
    <!-- kotak -->
    <div
      class="
        kotak
        bg-primary
        rounded-40
        flex
        lg:flex-row
        sm:flex-col
        p-2
        md:m-8
        2xl:w-7/12
        lg:w-9/12
        sm:w-11/12
        xs:w-screen xs:h-screen
      "
    >
      <!-- gambar -->
      <div class="absolute">
        <svg
          width="750"
          viewBox="0 0 792 495"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="599.294"
            cy="301.412"
            r="192.706"
            fill="white"
            fill-opacity="0.2"
          />
          <circle
            cx="157.412"
            cy="198.353"
            r="156.912"
            stroke="white"
            stroke-opacity="0.2"
          />
          <mask
            id="mask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="307"
            y="0"
            width="236"
            height="235"
          >
            <circle cx="424.941" cy="117.176" r="117.176" fill="#C4C4C4" />
          </mask>
          <g mask="url(#mask0)">
            <line
              x1="269.647"
              y1="24.9118"
              x2="578.824"
              y2="24.9118"
              stroke="white"
              stroke-opacity="0.2"
            />
            <line
              x1="269.647"
              y1="10.7942"
              x2="578.824"
              y2="10.7942"
              stroke="white"
              stroke-opacity="0.2"
            />
            <line
              x1="269.647"
              y1="39.0294"
              x2="578.824"
              y2="39.0294"
              stroke="white"
              stroke-opacity="0.2"
            />
            <line
              x1="269.647"
              y1="53.1471"
              x2="578.824"
              y2="53.1471"
              stroke="white"
              stroke-opacity="0.2"
            />
            <line
              x1="269.647"
              y1="67.2647"
              x2="578.824"
              y2="67.2647"
              stroke="white"
              stroke-opacity="0.2"
            />
            <line
              x1="269.647"
              y1="81.3824"
              x2="578.824"
              y2="81.3824"
              stroke="white"
              stroke-opacity="0.2"
            />
            <line
              x1="269.647"
              y1="95.5"
              x2="578.824"
              y2="95.5"
              stroke="white"
              stroke-opacity="0.2"
            />
            <line
              x1="269.647"
              y1="109.618"
              x2="578.824"
              y2="109.618"
              stroke="white"
              stroke-opacity="0.2"
            />
            <line
              x1="269.647"
              y1="123.735"
              x2="578.824"
              y2="123.735"
              stroke="white"
              stroke-opacity="0.2"
            />
            <line
              x1="269.647"
              y1="137.853"
              x2="578.824"
              y2="137.853"
              stroke="white"
              stroke-opacity="0.2"
            />
            <line
              x1="269.647"
              y1="151.971"
              x2="578.824"
              y2="151.971"
              stroke="white"
              stroke-opacity="0.2"
            />
            <line
              x1="269.647"
              y1="166.088"
              x2="578.824"
              y2="166.088"
              stroke="white"
              stroke-opacity="0.2"
            />
            <line
              x1="269.647"
              y1="180.206"
              x2="578.824"
              y2="180.206"
              stroke="white"
              stroke-opacity="0.2"
            />
            <line
              x1="269.647"
              y1="194.324"
              x2="578.824"
              y2="194.324"
              stroke="white"
              stroke-opacity="0.2"
            />
            <line
              x1="269.647"
              y1="208.441"
              x2="578.824"
              y2="208.441"
              stroke="white"
              stroke-opacity="0.2"
            />
            <line
              x1="269.647"
              y1="222.559"
              x2="578.824"
              y2="222.559"
              stroke="white"
              stroke-opacity="0.2"
            />
          </g>
        </svg>
      </div>

      <!-- bagian kiri -->
      <div
        class="
          bagianKiri
          text-white
          shadow-2xl
          hover:shadow-3xl
          px-5
          flex flex-col
          justify-end
          items-center
          xl:w-11/12
          lg:w-10/12
          xs:w-8/12
          lg:inline-flex
          xs:hidden
          lg:order-1
          xs:order-2
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
          shadow-2xl
          rounded-40
          xl:w-6/12
          lg:w-10/12
          xs:w-full
          md:p-8
          xs:p-4
          z-10
          transform
          overflow-y-auto
          lg:hover:scale-105
          transition-all
          duration-200
          lg:order-2
          xs:order-1
        "
      >
        <!-- logo and back btn -->
        <div class="flex justify-between">
          <!-- icon kembali -->
          <div id="iconBack" class="flex self-start" v-show="signUp">
            <!-- icon -->
            <button v-on:Click="loginSekarang">
              <Icon
                icon="fluent:arrow-left-12-filled"
                class="
                  rounded-full
                  h-8
                  w-8
                  p-1.5
                  hover:bg-accent
                  transition-all
                  duration-200
                "
              />
            </button>
          </div>
          <div></div>
          <!-- logo -->
          <div>
            <img
              src="../assets/images/logo/BursaKerjaLogo.svg"
              alt=""
              class="w-40"
            />
          </div>
        </div>
        <!-- Login -->
        <signIn id="signIn" v-show="signIn" />
        <!-- daftar -->

        <!-- Daftar -->
        <signUp id="signUp" v-show="signUp" />

        <span
          class="font-bold text-primary flex justify-center my-6 text-sm"
          v-show="signIn"
        >
          <button class="font-bold" v-on:Click="daftarSekarang">
            Daftar Sekarang >
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import signIn from "../components/Form/FormLogin.vue";
import signUp from "../components/Form/FormDaftar.vue";
import VueCarousel from "@chenfengyuan/vue-carousel";
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
    signIn,
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
      signIn: true,
      signUp: false,
      isActive: false,
    };
  },
  methods: {
    daftarSekarang() {
      this.signIn = false;
      this.signUp = true;
    },
    loginSekarang() {
      this.signIn = true;
      this.signUp = false;
    },
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

.example-slide {
  align-items: center;
  background-color: #666;
  color: #999;
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  min-height: 10rem;
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
