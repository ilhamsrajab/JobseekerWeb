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
        v-if="theme === 'light'"
        src="../../assets/images/logo/BursaKerjaLogo.svg"
        alt=""
        class="w-40"
      />
      <!-- logo light mode -->
      <img
        v-else
        src="../../assets/images/logo/BursaKerjaLogo_Black.svg"
        alt=""
        class="w-40"
      />
    </div>
    <!-- end of logo -->
    <div class="flex flex-col self-center md:m-8 sm:m-4">
      <!-- kotak header -->
      <div
        class="
          text-white
          p-5
          bg-primary bg-header
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
        <div class="xs:text-xl sm:text-3xl font-bold m-5 text-center">
          Sukses
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
          <li data-content="" class="step step-accent sm:text-sm xs:text-2xs">
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
          <h2
            class="
              text-center
              font-bold
              xs:text-lg
              sm:text-2xl
              mt-10
              text-neutral
              dark:text-white dark:text-opacity-80
            "
          >
            Selamat, lamaran Anda sudah dikirim. Tunggu notifikasi selanjutnya.
          </h2>
          <div
            class="
              flex
              mask mask-circle
              bg-accent
              m-6
              w-1/2
              justify-center
              items-center
              mx-auto
              transition-all
              duration-200
            "
          >
            <img
              src="../../assets/images/hand-s.svg"
              class="animate-bounce5 w-full"
              draggable="false"
              alt="hand"
              srcset=""
            />
          </div>
        </form>

        <div>
          <!-- button selesai -->
          <router-link :to="{ name: 'HalamanHome' }">
            <button class="btn btn-primary mt-6 sm:mb-3 xs:mb-5" type="submit">
              Selesai
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  name: "DaftarKirimLamaran",
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
  .steps .step.step-accent::before {
    background: #ffbeb2;
  }
}
</style>
