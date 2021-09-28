<template>
  <!-- container -->
  <div class="container-fluid flex flex-col min-h-screen p-5 bg-gray-100">
    <!-- logo -->
    <div class="text-2xl font-bold text-neutral flex justify-end mb-5">
      BursaKerja
    </div>
    <!-- <div class="fs-4 fw-bold align-self-end mb-3">Logotype</div> -->
    <div class="flex flex-col self-center md:m-8 sm:m-4">
      <!-- kotak header -->
      <div
        class="
          text-white
          p-5
          bg-primary
          mx-auto
          w-full
          rounded-40
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
        <div class="text-3xl font-bold m-5 text-center">Lengkapi Data Diri</div>
        <!-- step progress bar -->
        <ul class="w-full steps my-5">
          <li
            data-content=""
            class="step step-accent text-sm"
            :class="step1Classes"
            @click="stepSelected(currentStep)"
          >
            Data Diri
          </li>
          <li
            data-content=""
            class="step text-sm"
            :class="step2Classes"
            @click="stepSelected(currentStep)"
          >
            Media Sosial
          </li>
          <li
            data-content=""
            class="step text-sm"
            :class="step3Classes"
            @click="stepSelected(currentStep)"
          >
            Berkas
          </li>
          <li
            data-content=""
            class="step text-sm"
            :class="step4Classes"
            @click="stepSelected(currentStep)"
          >
            Riwayat Pekerjaan
          </li>

          <li
            data-content=""
            class="step text-sm"
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
          rounded-20
          md:py-8 md:px-16
          px-8
          py-4
          text-gray-500
          mt-8
          md:w-full
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
              class="btn btn-primary mt-6 mb-3"
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

        <!-- btn skip -->
        <div>
          <button
            class="
              btn btn-outline
              border-2 border-primary
              text-primary
              h-14
              w-full
              rounded-20
              shadow-lg
              hover:shadow-xl
              hover:bg-accent
              hover:border-transparent
              hover:text-neutral
              transition-all
              duration-200
              normal-case
            "
            v-if="currentStep > 1 && currentStep < 5"
            @click="stepNext"
          >
            Lewati
          </button>
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
      step1: false,
      step2: false,
      step3: false,
      step4: false,
      step5: false,
      currentStep: 1,
    };
  },
  computed: {
    step1Classes() {
      return { "step-accent": this.step1 };
    },
    step2Classes() {
      return { "step-accent": this.step2 };
    },
    step3Classes() {
      return { "step-accent": this.step3 };
    },
    step4Classes() {
      return { "step-accent": this.step4 };
    },
    step5Classes() {
      return { "step-accent": this.step5 };
    },
  },
  methods: {
    stepSelected(currentStep) {
      if (currentStep === 1) {
        this.step1 = !this.step1;
      } else if (currentStep === 2) {
        this.step2 = !this.step2;
      } else if (currentStep === 3) {
        this.step3 = !this.step3;
      } else if (currentStep === 4) {
        this.step4 = !this.step4;
      } else if (currentStep === 5) {
        this.step5 = !this.step5;
      }
    },
    stepNext() {
      this.currentStep++;
      if (this.currentStep === 1) {
        this.step1 = !this.step1;
      } else if (this.currentStep === 2) {
        this.step2 = !this.step2;
      } else if (this.currentStep === 3) {
        this.step3 = !this.step3;
      } else if (this.currentStep === 4) {
        this.step4 = !this.step4;
      } else if (this.currentStep === 5) {
        this.step5 = !this.step5;
      }
      console.log(this.currentStep);
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
</style>
