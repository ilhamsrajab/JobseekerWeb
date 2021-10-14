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
      <!-- <img
        src="../../assets/images/logo/BursaKerjaLogo_Black.svg"
        alt=""
        class="w-40"
      /> -->
      <!-- logo light mode -->
      <img
        src="../../assets/images/logo/BursaKerjaLogo.svg"
        alt=""
        class="w-40"
      />
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
        <!-- gambar -->
        <div class="absolute z-0">
          <img src="../../assets/images/header.svg" alt="" srcset="" />
        </div>
        <div class="xs:text-xl sm:text-3xl font-bold m-5 text-center">
          Lengkapi Pernyataan
        </div>
        <div class="text-sm font-medium mb-3 text-center">
          Nama Perusahaan - Posisi
        </div>
        <!-- step progress bar -->
        <ul class="w-full steps xs:my-0 sm:my-5">
          <li data-content="" class="step step-accent sm:text-sm xs:text-2xs">
            Data Diri
          </li>
          <li data-content="" class="step step-accent sm:text-sm xs:text-2xs">
            Berkas
          </li>
          <li data-content="" class="step step-accent sm:text-sm xs:text-2xs">
            Pernyataan
          </li>
          <li data-content="" class="step sm:text-sm xs:text-2xs">
            Kirim Lamaran
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
          <!-- persetujuan -->
          <div class="mt-4">
            <label class="label font-semibold" for="instagram">
              <span class="label-text"
                >Pernyataan Kesanggupan dan Komitmen</span
              >
            </label>
            <div class="flex items-start mt-8">
              <div class="flex items-center h-5">
                <input
                  id="comments"
                  name="comments"
                  type="checkbox"
                  class="checkbox"
                />
              </div>
              <div class="ml-3 text-sm">
                <label
                  for="comments"
                  class="
                    font-normal
                    text-neutral
                    dark:text-white dark:text-opacity-60
                  "
                  >Saya menyatakan bahwa data di atas adalah
                  <strong>benar data pribadi saya</strong>, jika ada kesalahan
                  saya siap menanggung semua akibatnya.</label
                >
              </div>
            </div>
          </div>
        </form>

        <div>
          <!-- btn selanjutnya -->
          <router-link :to="{ name: 'DaftarKirimLamaran' }">
            <button class="btn btn-primary mt-6 mb-3">Selanjutnya</button>
          </router-link>

          <!-- btn kembali -->
          <router-link :to="{ name: 'DaftarBerkas' }">
            <button class="btn btn-outline w-full mb-3">Kembali</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  name: "DaftarPernyataan",
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

.steps .step.step-accent::before {
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
