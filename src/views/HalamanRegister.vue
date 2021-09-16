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
      <Step />

      <!-- form data diri -->
      <!-- <DataDiri /> -->

      <!-- form Media Sosial -->
      <MediaSosial />

      <!-- form berkas -->
      <!-- <Berkas /> -->

      <!-- form riwayat pekerjaan -->
      <!-- <RiwayatPekerjaan /> -->

      <!--  sukses -->
      <!-- <Sukses /> -->
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
import Step from "../components/UI/Step.vue";

export default {
  name: "HalamanDaftar",
  components: {
    Icon,
    DataDiri,
    MediaSosial,
    Berkas,
    RiwayatPekerjaan,
    Sukses,
    Step,
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
