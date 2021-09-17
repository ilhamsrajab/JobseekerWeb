<template>
  <!-- container -->
  <div class="container-fluid flex flex-col justify-center p-5">
    <!-- logo -->
    <div class="text-2xl font-bold text-neutral flex justify-end mb-5">
      BursaKerja
    </div>
    <!-- <div class="fs-4 fw-bold align-self-end mb-3">Logotype</div> -->
    <div class="flex flex-col self-center" style="width: 1000px">
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
          h-56
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
            @click="stepSelected(1)"
          >
            Data Diri
          </li>
          <li
            data-content=""
            class="step text-sm"
            :class="step2Classes"
            @click="stepSelected(2)"
          >
            Media Sosial
          </li>
          <li data-content="" 
          class="step text-sm"
          :class="step3Classes"
          @click="stepSelected(3)"
          >Berkas</li>
          <li data-content="" 
          class="step text-sm"
          :class="step4Classes"
          @click="stepSelected(4)"
          >Riwayat Pekerjaan</li>

          <li data-content="" 
          class="step text-sm"
          :class="step5Classes"
          @click="stepSelected(5)"
          >Selesai</li>
        </ul>
      </div>
      <div class="mx-auto mt-4 z-10" style="width: 600px">
        <form class="form-control" action="#" method="POST">
          <!-- form data diri -->
          <!-- <DataDiri /> -->

          <!-- form Media Sosial -->
          <!-- <MediaSosial /> -->

          <!-- form berkas -->
          <Berkas />

          <!-- form riwayat pekerjaan -->
          <!-- <RiwayatPekerjaan /> -->

          <!--  sukses -->
          <!-- <Sukses /> -->
        </form>
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
    };
  },
  computed: {
    step1Classes() {
      return { 'step-accent' : this.step1 };
    },
    step2Classes() {
      return { 'step-accent' : this.step2 };
    },
    step3Classes() {
      return { 'step-accent' : this.step3 };
    },
    step4Classes() {
      return { 'step-accent' : this.step4 };
    },
    step5Classes() {
      return { 'step-accent' : this.step5 };
    },
  },
  methods: {
    stepSelected(step) {
      if(step === 1) {
        this.step1 = !this.step1;
      } else if(step === 2) {
        this.step2 = !this.step2;
      } else if(step === 3) {
        this.step3 = !this.step3;
      } else if(step === 4) {
        this.step4 = !this.step4;
      } else if(step === 5) {
        this.step5 = !this.step5;
      }
    },
  }
}
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
