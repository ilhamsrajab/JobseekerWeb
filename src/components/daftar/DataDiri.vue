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
          Lengkapi Data Diri
        </div>
        <div class="text-sm font-medium mb-3 text-center">
          Nama Perusahaan - Posisi
        </div>
        <!-- step progress bar -->
        <ul class="w-full steps xs:my-0 sm:my-5">
          <li data-content="" class="step step-accent sm:text-sm xs:text-2xs">
            Data Diri
          </li>
          <li data-content="" class="step sm:text-sm xs:text-2xs">Berkas</li>
          <li data-content="" class="step sm:text-sm xs:text-2xs">
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
          <!-- form data diri -->
          <!-- nama lengkap -->
          <div class="mt-4">
            <label class="label" for="namaLengkap">
              <span class="label-text font-semibold">Nama Lengkap</span>
            </label>
            <input
              id="namaLengkap"
              title="Nama Lengkap"
              type="text"
              placeholder="Masukan nama lengkap"
              class="input input-primary w-full"
              required
            />
          </div>

          <!-- nik -->
          <div class="mt-4">
            <label class="label" for="nik">
              <span class="label-text font-semibold"
                >Nomor Induk Kependudukan</span
              >
            </label>
            <input
              id="nik"
              title="Nomor Induk Kependudukan"
              type="number"
              placeholder="Masukan nomor induk kependudukan"
              class="input input-primary w-full"
              maxlength="16"
              max="9999999999999999"
              required
            />
          </div>

          <!-- jenis kelamin -->
          <div class="mt-4">
            <label class="label" for="jenisKelamin">
              <span class="label-text font-semibold">Jenis Kelamin</span>
            </label>
            <div class="flex flex-row">
              <div class="flex items-center mr-10">
                <input
                  id="push-lakilaki"
                  name="jenisKelamin"
                  type="radio"
                  class="radio"
                />
                <label
                  for="push-lakilaki"
                  class="
                    ml-3
                    block
                    text-sm
                    font-normal
                    text-neutral
                    dark:text-white dark:text-opacity-60
                  "
                >
                  Laki-laki
                </label>
              </div>
              <div class="flex items-center">
                <input
                  id="push-perempuan"
                  name="jenisKelamin"
                  type="radio"
                  class="radio"
                />
                <label
                  for="push-perempuan"
                  class="
                    ml-3
                    block
                    text-sm
                    font-normal
                    text-neutral
                    dark:text-white dark:text-opacity-60
                  "
                >
                  Perempuan
                </label>
              </div>
            </div>
          </div>

          <!-- Tempat tanggal lahir -->
          <div class="mt-4">
            <label class="label" for="tempatLahir">
              <span class="label-text font-semibold">Tempat Tanggal Lahir</span>
            </label>
            <div class="flex flex-row gap-2">
              <input
                id="tempatLahir"
                title="Tempat Lahir"
                type="text"
                placeholder="Masukan tempat lahir"
                class="input input-primary w-3/5"
                required
              />
              <input
                id="tanggalLahir"
                title="Tanggal Lahir"
                type="date"
                class="input input-primary w-2/5"
                required
              />
            </div>
          </div>

          <!-- agama -->
          <div class="mt-4">
            <label class="label" for="agama">
              <span class="label-text font-semibold">Agama</span>
            </label>
            <select id="agama" class="select select-primary w-full">
              <option disabled="disabled" selected="selected">
                Pilih Agama
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>

          <!-- Status Perkawinan -->
          <div class="mt-4">
            <label class="label" for="statusPerkawinan">
              <span class="label-text font-semibold">Status Perkawinan</span>
            </label>
            <select id="statusPerkawinan" class="select select-primary w-full">
              <option disabled="disabled" selected="selected">
                Pilih Status Perkawinan
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>

          <!-- alamat -->
          <div class="mt-4">
            <label class="label" for="alamat">
              <span class="label-text font-semibold">Alamat</span>
            </label>
            <!-- provinsi -->
            <div class="mb-1">
              <label class="label" for="alamatProvinsi">
                <span class="label-text">Provinsi</span>
              </label>
              <select id="alamatProvinsi" class="select select-primary w-full">
                <option disabled="disabled" selected="selected">
                  Pilih Provinsi
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>

            <!-- kota/kabupaten -->
            <div class="mb-1 mt-2">
              <label class="label" for="alamatKota">
                <span class="label-text">Kota/Kabupaten</span>
              </label>
              <select id="alamatKota" class="select select-primary w-full">
                <option disabled="disabled" selected="selected">
                  Pilih Kota/Kabupaten
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>

            <!-- kecamatan -->
            <div class="mb-1 mt-2">
              <label class="label" for="alamatKecamatan">
                <span class="label-text">Kecamatan</span>
              </label>
              <select id="alamatKecamatan" class="select select-primary w-full">
                <option disabled="disabled" selected="selected">
                  Pilih Kecamatan
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>

            <!-- desa/kelurahan -->
            <div class="mb-1 mt-2">
              <label class="label" for="alamatDesa">
                <span class="label-text">Desa/Kelurahan</span>
              </label>
              <select id="alamatDesa" class="select select-primary w-full">
                <option disabled="disabled" selected="selected">
                  Pilih Desa/Kelurahan
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>

            <!-- rt/rw -->
            <div class="mb-1 mt-2">
              <label class="label" for="alamatRT">
                <span class="label-text">RT/RW</span>
              </label>
              <div class="flex flex-row gap-2">
                <input
                  id="alamatRT"
                  title="Nomor RT"
                  type="number"
                  maxlength="3"
                  placeholder="Masukan no. RT"
                  class="input input-primary w-1/2"
                  required
                />
                <input
                  id="alamatRW"
                  title="Nomor RW"
                  type="number"
                  maxlength="3"
                  placeholder="Masukan no. RW"
                  class="input input-primary w-1/2"
                  required
                />
              </div>
            </div>

            <!-- alamat rumah -->
            <div class="mb-1 mt-2">
              <label class="label" for="alamatRumah">
                <span class="label-text">Desa/Kelurahan</span>
              </label>
              <div class="mt-1">
                <textarea
                  id="alamatRumah"
                  title="Alamat Rumah"
                  rows="3"
                  class="textarea"
                  placeholder="Tuliskan Alamat Rumah/Jalan/Gang/Perumahan"
                  required
                />
              </div>
            </div>

            <!-- kodepos -->
            <div class="mb-1 mt-2">
              <label class="label" for="alamatKodepos">
                <span class="label-text">Kodepos</span>
              </label>
              <input
                id="alamatKodepos"
                type="number"
                maxlength="5"
                placeholder="Masukan no. kodepos"
                class="input input-primary w-full"
                disabled
              />
            </div>
          </div>

          <!-- pendidikan terakhir -->
          <div class="mt-4">
            <label class="label" for="pendidikan">
              <span class="label-text font-semibold">Pendidikan Terakhir</span>
            </label>
            <select id="pendidikan" class="select select-primary w-full">
              <option disabled="disabled" selected="selected">
                Pilih Pendidikan Terakhir
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>

          <!-- no hp -->
          <div class="mt-4">
            <label class="label font-semibold" for="noHP">
              <span class="label-text">Nomor Handphone</span>
            </label>
            <div class="mt-1 flex rounded-md shadow-sm">
              <span
                class="
                  inline-flex
                  text-neutral
                  font-bold
                  items-center
                  px-5
                  rounded-l-20
                  bg-accent
                  text-sm
                "
              >
                +62
              </span>
              <input
                id="noHP"
                title="Nomor Handphone"
                type="tel"
                placeholder="81234567890"
                minlength="11"
                maxlength="13"
                class="input input-primary w-full"
                style="border-radius: 0px 20px 20px 0px !important"
                required
              />
            </div>
          </div>

          <!-- foto pribadi -->
          <div class="mt-4">
            <label class="label font-semibold" for="fotoPribadi">
              <span class="label-text">Foto Pribadi</span>
            </label>
            <input
              id="fotoPribadi"
              type="file"
              accept="image/*"
              title="Pilih foto pribadi"
              class="input input-primary w-full py-3.5 px-4"
              required
            />
            <label class="label">
              <p href="#" class="label-text-alt text-gray-500">
                * upload foto maksimal 7 MB
              </p>
            </label>
          </div>

          <!-- ktp -->
          <div class="mt-4">
            <label class="label font-semibold" for="ktp">
              <span class="label-text">Foto E-KTP</span>
            </label>
            <input
              id="ktp"
              type="file"
              accept="image/*"
              title="Pilih foto E-KTP"
              class="input input-primary w-full py-3.5 px-4"
              required
            />
            <label class="label">
              <p href="#" class="label-text-alt text-gray-500">
                * upload foto maksimal 7 MB
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
          <router-link :to="{ name: 'DaftarBerkas' }">
            <button class="btn btn-primary mt-6 mb-3">Selanjutnya</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import { reactive } from "@vue/reactivity";

export default {
  name: "DataDiri",
  components: {
    Icon,
  },
  setup() {
    const dataDiri = reactive({
      nama_lengkap: "",
      nik: "",
      jenis_kelamin: "",
      tempat_lahir: "",
      tanggal_lahir: "",
      agama: "",
      status_perkawinan: "",
      provinsi: "",
      kota_kabupaten: "",
      kecamatan: "",
      desa: "",
      rt: "",
      rw: "",
      alamat_rumah: "",
      kode_pos: "",
      pendidikan: "",
      no_hp: "",
      confirmCheckbox: "",
    });
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
