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
        v-else-if="theme === 'dark'"
        src="../../assets/images/logo/BursaKerjaLogo_Black.svg"
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
          bg-primary bg-header
          mx-auto
          w-full
          xl:h-56
          sm:rounded-40
          xs:rounded-20
          shadow-btn
          md:h-60
          flex flex-col
          justify-between
          z-0
        "
      >
        <!-- title -->
        <div class="xs:text-xl sm:text-3xl font-bold m-5 text-center">
          Lengkapi Berkas
        </div>
        <!-- end of title -->
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
          <li data-content="" class="step sm:text-sm xs:text-2xs">
            Riwayat Pekerjaan
          </li>

          <li data-content="" class="step sm:text-sm xs:text-2xs">Selesai</li>
        </ul>
        <!-- end of step progress bar -->
      </div>
      <!-- end of kotak header -->
      <!-- form -->
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
        <form
          class="form-control"
          action=""
          method="POST"
          @submit.prevent="submitForm"
        >
          <!-- curriculumVitae -->
          <div class="mt-4">
            <label class="label font-semibold" for="curriculumVitae">
              <span class="label-text">Curriculum Vitae</span>
            </label>
            <input
              id="curriculumVitae"
              type="file"
              accept=".pdf"
              title="Pilih file cv"
              class="input input-primary w-full py-3.5 px-4"
              @change="onFileSelectedCV"
            />
            <label class="label">
              <p href="#" class="label-text-alt text-gray-500">
                * Upload dengan format PDF maksimal 7 MB. Jika tidak memiliki
                berkas, tidak perlu diisi.
              </p>
            </label>
          </div>

          <!-- ijazah -->
          <div class="mt-4">
            <label class="label font-semibold" for="ijazah">
              <span class="label-text">Ijazah</span>
            </label>
            <input
              id="ijazah"
              type="file"
              accept=".pdf"
              title="Pilih file ijazah"
              class="input input-primary w-full py-3.5 px-4"
              @change="onFileSelectedIjazah"
            />
            <label class="label">
              <p href="#" class="label-text-alt text-gray-500">
                * Upload dengan format PDF maksimal 7 MB. Jika tidak memiliki
                berkas, tidak perlu diisi.
              </p>
            </label>
          </div>

          <!-- portofolio -->
          <div class="mt-4">
            <label class="label font-semibold" for="portofolio">
              <span class="label-text">Portofolio</span>
            </label>
            <input
              id="portofolio"
              type="file"
              accept=".pdf"
              title="Pilih file portofolio"
              class="input input-primary w-full py-3.5 px-4"
              multiple
              @change="onFileSelectedPortofolio"
            />
            <label class="label">
              <p href="#" class="label-text-alt text-gray-500">
                * Upload dengan format PDF maksimal 7 MB. Bisa upload beberapa
                file. Jika tidak memiliki berkas, tidak perlu diisi.
              </p>
            </label>
          </div>

          <!-- sertifikat -->
          <div class="mt-4">
            <label class="label font-semibold" for="sertifikat">
              <span class="label-text">Sertifikat</span>
            </label>
            <input
              id="sertifikat"
              type="file"
              accept=".pdf"
              title="Pilih file sertifikat"
              class="input input-primary w-full py-3.5 px-4"
              multiple
              @change="onFileSelectedSertifikat"
            />
            <label class="label">
              <p href="#" class="label-text-alt text-gray-500">
                * Upload dengan format PDF maksimal 7 MB. Bisa upload beberapa
                file. Jika tidak memiliki berkas, tidak perlu diisi.
              </p>
            </label>
          </div>

          <!-- transkripNilai -->
          <div class="mt-4">
            <label class="label font-semibold" for="transkripNilai">
              <span class="label-text">Transkrip Nilai</span>
            </label>
            <input
              id="transkripNilai"
              type="file"
              accept=".pdf"
              title="Pilih file transkrip nilai"
              class="input input-primary w-full py-3.5 px-4"
              multiple
              @change="onFileSelectedTranskripNilai"
            />
            <label class="label">
              <p href="#" class="label-text-alt text-gray-500">
                * Transkrip nilai pendidikan terakhir. Upload dengan format PDF
                maksimal 7 MB. Jika tidak memiliki berkas, tidak perlu diisi.
              </p>
            </label>
          </div>

          <!-- persetujuan -->
          <div class="flex items-start mt-8">
            <div class="flex items-center h-5">
              <input
                id="comments"
                name="comments"
                type="checkbox"
                class="
                  checkbox checkbox-primary
                  focus:ring-2 focus:ring-primary-focus
                  h-5
                  w-5
                  text-primary
                  bg-gray-100
                  border-1 border-gray-300
                  rounded
                  transition-all
                  duration-200
                "
                v-model="isChecked"
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

          <!-- btn selanjutnya -->
          <button
            class="btn btn-primary mt-6 mb-3"
            :class="isChecked ? 'btn-primary' : 'btn-disabled'"
          >
            Selanjutnya
          </button>
        </form>

        <div>
          <!-- btn kembali -->
          <router-link :to="{ name: 'MediaSosial' }">
            <button class="btn btn-outline w-full mb-3">Kembali</button>
          </router-link>

          <!-- btn skip -->
          <router-link :to="{ name: 'RiwayatPekerjaan' }">
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
      <!-- end of form -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Berkas",
  components: {},
  data: () => {
    return {
      theme: "",
      berkas: {
        curriculum_vitae: null,
        ijazah: null,
        portofolio: null,
        sertifikat: null,
        transkipNilai: null,
      },
      isChecked: "",
    };
  },
  created() {
    this.theme = localStorage.getItem("theme") || "light";
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("token");
  },
  mounted() {
    this.theme = localStorage.getItem("theme") || "light";
  },
  methods: {
    onFileSelectedCV(event) {
      this.berkas.curriculum_vitae = event.target.files[0];
      console.log(event);
    },

    onFileSelectedIjazah(event) {
      this.berkas.ijazah = event.target.files[0];
      console.log(event);
    },

    onFileSelectedPortofolio(event) {
      this.berkas.sertifikat = event.target.files[0];
      console.log(event);
    },

    onFileSelectedSertifikat(event) {
      this.berkas.sertifikat = event.target.files[0];
      console.log(event);
    },

    onFileSelectedTranskipNilai(event) {
      this.berkas.transkipNilai = event.target.files[0];
      console.log(event);
    },

    submitForm() {
      if (this.berkas.curriculum_vitae !== null) {
        const formData = new FormData();
        formData.append("curriculum_vitae", this.berkas.curriculum_vitae);

        this.$store.dispatch("auth/register_curriculum_vitae", formData);
      }

      if (this.berkas.portofolio !== null) {
        const formData = new FormData();
        formData.append("portofolio", this.berkas.portofolio);

        this.$store.dispatch("auth/register_portofolio", formData);
      }

      if (this.berkas.ijazah !== null) {
        const formData = new FormData();
        formData.append("ijazah", this.berkas.ijazah);

        this.$store.dispatch("auth/register_ijazah", formData);
      }

      if (this.berkas.sertifikat !== null) {
        const formData = new FormData();
        formData.append("sertifikat", this.berkas.sertifikat);

        this.$store.dispatch("auth/register_sertifikat", formData);
      }

      if (this.berkas.transkipNilai !== null) {
        const formData = new FormData();
        formData.append("transkipNilai", this.berkas.transkipNilai);

        this.$store.dispatch("auth/register_transkip_nilai", formData);
      }
      console.log(this.user);

      this.$router.push("/lengkapi-riwayat-pekerjaan");
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

input[type="file"]::file-selector-button::after {
  background: none;
  content: url("https://api.iconify.design/fluent/cloud-add-16-filled.svg");
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
