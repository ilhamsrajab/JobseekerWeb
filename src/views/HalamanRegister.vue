<template>
  <!-- container -->
  <div
    class="
      container-fluid
      flex flex-col
      min-h-screen
      p-5
      bg-gray-100
      dark:bg-gray-800
    "
  >
    <!-- logo -->
    <div class="flex justify-end xs:mb-5 sm:mb-0">
      <!-- logo dark mode -->
      <img
        src="../assets/images/logo/BursaKerjaLogo_Black.svg"
        alt=""
        class="w-40"
      />
      <!-- logo light mode -->
      <!-- <img src="../assets/images/logo/BursaKerjaLogo.svg" alt="" class="w-40" /> -->
    </div>
    <div class="flex flex-col self-center md:m-8 sm:m-4">
      <!-- kotak header -->
      <div
        class="
          text-white
          p-5
          bg-primary
          mx-auto
          w-full
          sm:rounded-40
          xs:rounded-20
          shadow-btn
          xl:h-56
          md:h-60
          flex flex-col
          justify-between
          z-0
        "
      >
        <!-- gambar -->
        <div class="absolute z-0">
          <img src="../assets/images/header.svg" alt="" srcset="" />
        </div>
        <div class="xs:text-xl sm:text-3xl font-bold m-5 text-center">
          Lengkapi Data Diri
        </div>
        <!-- step progress bar -->
        <ul class="w-full steps xs:my-0 sm:my-5">
          <li
            data-content=""
            class="step step-accent sm:text-sm xs:text-2xs"
            :class="step1Classes"
            @click="stepSelected(currentStep)"
          >
            Data Diri
          </li>
          <li
            data-content=""
            class="step sm:text-sm xs:text-2xs"
            :class="step2Classes"
            @click="stepSelected(currentStep)"
          >
            Media Sosial
          </li>
          <li
            data-content=""
            class="step sm:text-sm xs:text-2xs"
            :class="step3Classes"
            @click="stepSelected(currentStep)"
          >
            Berkas
          </li>
          <li
            data-content=""
            class="step sm:text-sm xs:text-2xs"
            :class="step4Classes"
            @click="stepSelected(currentStep)"
          >
            Riwayat Pekerjaan
          </li>

          <li
            data-content=""
            class="step sm:text-sm xs:text-2xs"
            :class="step5Classes"
            @click="stepSelected(currentStep)"
          >
            Selesai
          </li>
        </ul>
      </div>
      <div
        class="
          mx-auto
          z-10
          bg-white
          dark:bg-gray-900
          rounded-20
          lg:py-6
          md:py-4
          lg:px-12
          sm:px-8
          xs:px-4
          sm:py-4
          xs:py-2
          text-gray-500
          sm:mt-8
          xs:mt-4
          md:w-10/12
          xl:w-4/5
        "
      >
        <form class="form-control" action="" method="POST">
          <!-- form data diri -->
          <data-diri v-if="currentStep === 1"></data-diri>

          <!-- form Media Sosial -->
          <media-sosial v-if="currentStep === 2"></media-sosial>

          <!-- form berkas -->
          <berkas v-if="currentStep === 3"></berkas>

          <!-- form riwayat pekerjaan -->
          <riwayat-pekerjaan v-if="currentStep === 4"></riwayat-pekerjaan>

          <!--  sukses -->
          <sukses v-if="currentStep === 5"></sukses>

          <!-- submit -->
          <div>
            <button
              class="btn btn-primary mt-6 sm:mb-3 xs:mb-5"
              v-if="currentStep === 5"
              type="submit"
            >
              Selesai
            </button>
          </div>
        </form>

        <!-- btn selanjutnya -->
        <div>
          <button
            class="btn btn-primary mt-6 mb-3"
            v-if="currentStep < 5"
            @click="stepNext"
          >
            Selanjutnya
          </button>
        </div>

        <!-- btn kembali -->
        <div>
          <button
            class="btn btn-outline w-full mb-3"
            v-if="currentStep > 1 && currentStep < 5"
            @click="stepBack"
          >
            Kembali
          </button>

          <!-- btn skip -->
          <div>
            <button
              class="
                btn
                w-full
                mt-3
                mb-6
                dark:text-white dark:text-opacity-60
                hover:text-opacity-80
                transition-all
                duration-200
              "
              v-if="currentStep > 1 && currentStep < 5"
              @click="stepNext"
            >
              Lewati >
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import DataDiri from "../components/register/DataDiri.vue";
import MediaSosial from "../components/register/MediaSosial.vue";
import Berkas from "../components/register/Berkas.vue";
import RiwayatPekerjaan from "../components/register/RiwayatPekerjaan.vue";
import Sukses from "../components/register/Sukses.vue";

export default {
  name: "HalamanDaftar",
  components: {
    Icon,
    DataDiri,
    MediaSosial,
    Berkas,
    RiwayatPekerjaan,
    Sukses,
  },
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
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

.steps .step::before {
  height: 0.375rem;
  background: white;
}
.steps .step::after {
  background: white;
  width: 1.25rem;
  height: 1.25rem;
}

.steps .step.step-accent::after {
  background: #ffbeb2;
}

@media only screen and (max-width: 480px) {
  .steps .step::before {
    height: 0.3rem;
    background: white;
  }
  .steps .step::after {
    background: white;
    width: 1rem;
    height: 1rem;
  }

  .steps .step.step-accent::after {
    background: #ffbeb2;
  }
}
</style>
