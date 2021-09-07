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
        <!-- <div class="absolute z-0">
          <svg
            width="700"
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
        </div> -->
        <div class="text-3xl font-bold m-5 text-center">Lengkapi Data Diri</div>
        <ul class="w-full steps my-5">
          <li data-content="" class="step step-accent text-sm">Data Diri</li>
          <li data-content="" class="step text-sm">Media Sosial</li>
          <li data-content="" class="step text-sm">Berkas</li>
          <li data-content="" class="step text-sm">Riwayat Pekerjaan</li>
          <li data-content="" class="step text-sm">Selesai</li>
        </ul>
      </div>

      <!-- form data diri -->
      <!-- <DataDiri /> -->

      <!-- form Media Sosial -->
      <!-- <MediaSosial /> -->

      <!-- form berkas -->
      <Berkas />
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import DataDiri from "../components/register/DataDiri.vue";
import MediaSosial from "../components/register/MediaSosial.vue";
import Berkas from "../components/register/Berkas.vue";

export default {
  name: "HalamanDaftar",
  components: {
    Icon,
    DataDiri,
    MediaSosial,
    Berkas,
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

input[type="file"]::file-selector-button {
  background-image: url("https://api.iconify.design/fluent/cloud-add-16-filled.svg");
}
</style>
