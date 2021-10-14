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
        <div class="absolute z-0">
          <img src="../../assets/images/header.svg" alt="" srcset="" />
        </div>
        <div class="xs:text-xl sm:text-3xl font-bold m-5 text-center">
          Lengkapi Riwayat Pekerjaan
        </div>
        <!-- step progress bar -->
        <ul class="w-full steps xs:my-0 sm:my-5">
          <li data-content="" class="step step-accent sm:text-sm xs:text-2xs">
            Data Diri
          </li>
          <li data-content="" class="step step-accent sm:text-sm xs:text-2xs">
            Media Sosial
          </li>
          <li data-content="" class="step step-accent sm:text-sm xs:text-2xs">
            Berkas
          </li>
          <li data-content="" class="step step-accent sm:text-sm xs:text-2xs">
            Riwayat Pekerjaan
          </li>

          <li data-content="" class="step sm:text-sm xs:text-2xs">Selesai</li>
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
          <!-- tambah riwayat pekerjaan -->
          <form-riwayat-pekerjaan v-for="item in items" :key="item.id">
          </form-riwayat-pekerjaan>

          <div
            class="
              group
              mt-4
              flex
              justify-center
              items-center
              px-6
              pt-5
              pb-6
              rounded-20
              border-2 border-gray-300 border-dashed
              hover:border-primary hover:bg-gray-100
              dark:hover:bg-gray-800 dark:hover:border-purple-400
              transition-all
              duration-200
            "
          >
            <div class="flex text-sm">
              <label
                for="file-upload"
                class="
                  relative
                  cursor-pointer
                  font-medium
                  text-primary
                  group-hover:text-primary
                  dark:text-purple-400 dark:group-hover:text-purple-400
                  transition-all
                  duration-200
                "
              >
                <span @click="addRiwayatPekerjaan">
                  + Tambah Riwayat Pekerjaan</span
                >
              </label>
            </div>
          </div>
          <label class="label mb-4">
            <p href="#" class="label-text-alt">
              * Jika tidak memiliki riwayat pekerjaan, maka tidak perlu
              mengisinya.
            </p>
          </label>

          <!-- persetujuan -->
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
        </form>

        <div>
          <!-- btn selanjutnya -->
          <router-link :to="{ name: 'Sukses' }">
            <button class="btn btn-primary mt-6 mb-3">Selanjutnya</button>
          </router-link>

          <!-- btn kembali -->
          <router-link :to="{ name: 'Berkas' }">
            <button class="btn btn-outline w-full mb-3">Kembali</button>
          </router-link>

          <!-- btn skip -->
          <router-link :to="{ name: 'Sukses' }">
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
            >
              Lewati >
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import FormRiwayatPekerjaan from "../Form/FormRiwayatPekerjaan.vue";

export default {
  name: "RiwayatPekerjaan",
  components: {
    Icon,
    FormRiwayatPekerjaan,
  },
  data() {
    return {
      items: [
        {
          id: 0,
        },
      ],
      nextItemsId: 1,
    };
  },
  methods: {
    addRiwayatPekerjaan() {
      this.items.push({
        id: this.items.nextItemsId++,
      }),
        console.log(this.items);
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

.steps .step.step-accent::before {
  background: #ffbeb2;
}

.divider {
  display: flex;
  align-items: center;
  height: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: aqua;
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
