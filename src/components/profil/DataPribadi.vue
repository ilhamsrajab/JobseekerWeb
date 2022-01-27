<template>
  <div class="mx-auto mt-4 z-10">
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
          :value="getDataDiriNama"
        />
      </div>

      <!-- nik -->
      <div class="mt-4">
        <label class="label" for="nik">
          <span class="label-text font-semibold">Nomor Induk Kependudukan</span>
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
          :value="getDataDiriNik"
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
              value="Laki-laki"
              v-model="getDataDiriJenisKelamin"
            />
            <label
              for="push-lakilaki"
              class="ml-3 block text-sm font-normal text-neutral dark:text-white dark:text-opacity-60"
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
              value="Perempuan"
              v-model="getDataDiriJenisKelamin"
            />
            <label
              for="push-perempuan"
              class="ml-3 block text-sm font-normal text-neutral dark:text-white dark:text-opacity-60"
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
            :value="getDataDiriTempatLahir"
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
        <select
          id="agama"
          class="select select-primary w-full"
          v-model="getDataDiriAgama"
        >
          <option disabled="disabled" selected="selected">Pilih Agama</option>
          <option>Islam</option>
          <option>Hindu</option>
          <option>Budha</option>
          <option>Katolik</option>
          <option>Protestan</option>
          <option>Khonhucu</option>
        </select>
      </div>

      <!-- Status Perkawinan -->
      <div class="mt-4">
        <label class="label" for="statusPerkawinan">
          <span class="label-text font-semibold">Status Perkawinan</span>
        </label>
        <select
          id="statusPerkawinan"
          class="select select-primary w-full"
          v-model="getDataDiriStatusPerkawinan"
        >
          <option disabled="disabled" selected="selected">
            Pilih Status Perkawinan
          </option>
          <option>Kawin</option>
          <option>Belum Kawin</option>
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
            <option
              v-for="option in getDataProvince"
              :value="option.value"
              :key="option"
              selected="selected"
            >
              {{ option.name }}
            </option>
          </select>
        </div>

        <!-- kota/kabupaten -->
        <div class="mb-1 mt-2">
          <label class="label" for="alamatKota">
            <span class="label-text">Kota/Kabupaten</span>
          </label>
          <select id="alamatKota" class="select select-primary w-full">
            <option
              v-for="option in getDataDistrict"
              :value="option.value"
              :key="option"
              selected="selected"
            >
              {{ option.name }}
            </option>
          </select>
        </div>

        <!-- kecamatan -->
        <div class="mb-1 mt-2">
          <label class="label" for="alamatKecamatan">
            <span class="label-text">Kecamatan</span>
          </label>
          <select id="alamatKecamatan" class="select select-primary w-full">
            <option
              v-for="option in getDataSubDistrict"
              :value="option.value"
              :key="option"
              selected="selected"
            >
              {{ option.name }}
            </option>
          </select>
        </div>

        <!-- desa/kelurahan -->
        <div class="mb-1 mt-2">
          <label class="label" for="alamatDesa">
            <span class="label-text">Desa/Kelurahan</span>
          </label>
          <input
            id="alamatDesa"
            title="Alamat Desa"
            type="text"
            placeholder="Masukan alamat desa"
            class="input input-primary w-full"
            required
            v-model="getDataDiriDesa"
          />
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
              :value="getDataDiriRT"
            />
            <input
              id="alamatRW"
              title="Nomor RW"
              type="number"
              maxlength="3"
              placeholder="Masukan no. RW"
              class="input input-primary w-1/2"
              required
              :value="getDataDiriRW"
            />
          </div>
        </div>

        <!-- alamat rumah -->
        <div class="mb-1 mt-2">
          <label class="label" for="alamatRumah">
            <span class="label-text">Alamat Lengkap</span>
          </label>
          <div class="mt-1">
            <textarea
              id="alamatRumah"
              title="Alamat Rumah"
              rows="3"
              class="textarea"
              placeholder="Tuliskan Alamat Rumah/Jalan/Gang/Perumahan"
              required
              :value="getDataDiriAlamatRumah"
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
            required
            :value="getDataDiriKodePos"
          />
        </div>
      </div>

      <!-- pendidikan terakhir -->
      <div class="mt-4">
        <label class="label" for="pendidikan">
          <span class="label-text font-semibold">Pendidikan Terakhir</span>
        </label>
        <select
          id="pendidikan"
          class="select select-primary w-full"
          v-model="getDataDiriPendidikanTerakhir"
        >
          <option disabled="disabled" selected="selected">
            Pilih Pendidikan Terakhir
          </option>
          <option>Tidak atau Belum Sekolah</option>
          <option>Tidak Tamat SD atau Sederajat</option>
          <option>Tamat SD atau Sederajat</option>
          <option>SLTP atau Sederajat</option>
          <option>SLTA atau Sederajat</option>
          <option>Diploma I atau II</option>
          <option>Akademi atau Diploma III atau Sarjana Muda</option>
          <option>Diploma IV atau Strata I</option>
          <option>Strata II</option>
          <option>Strata III</option>
        </select>
      </div>

      <!-- no hp -->
      <div class="mt-4">
        <label class="label font-semibold" for="noHP">
          <span class="label-text">Nomor Handphone</span>
        </label>
        <div class="mt-1 flex rounded-md shadow-sm">
          <span
            class="inline-flex text-neutral font-bold items-center px-5 rounded-l-20 bg-accent text-sm"
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

      <!-- ktp -->
      <!-- <div class="mt-4">
        <label class="label font-semibold" for="ktp">
          <span class="label-text">Foto E-KTP</span>
        </label>
        <div class="flex sm:flex-row xs:flex-col gap-2">
          <input
            id="ktp"
            type="file"
            accept="image/*"
            title="Pilih foto E-KTP"
            class="input input-primary py-3.5 px-4 w-full"
            required
          />
          <label
            for="my-modal-2"
            class="
              cursor-pointer
              btn btn-primary-0
              xs:w-full xs:text-2xs
              sm:w-32 sm:text-xs
              md:text-sm
              text-base
            "
          >
            <Icon
              icon="fluent:eye-show-24-filled"
              :inline="true"
              class="mr-1"
            />
            Lihat file
          </label>
        </div> -->
      <!-- <img
          src="http://127.0.0.1:8000/storage/jobseeker/2/foto_ktp/6eMQu9uLGZdePRUqaLx5VHABT4kmB1ZqTCbsyNyx.png"
          class="w-full rounded-20"
        />
        <img
          :src="'http://127.0.0.1:8000' + getDataDiriFotoKTP"
          class="w-full rounded-20"
        />
        <img
          :src="axios.defaults.baseURL + getDataDiriFotoKTP"
          class="w-full rounded-20"
        />
        {{ getDataDiri }}
        <label class="label">
          <p href="#" class="label-text-alt text-gray-500">
            * upload foto maksimal 7 MB
          </p>
        </label> -->
      <!-- </div> -->

      <!-- modal ktp -->
      <!-- <input type="checkbox" id="my-modal-2" class="modal-toggle" /> -->
      <!-- isi modal -->
      <!-- <div class="modal overflow-y-auto shadow-xl">
        <div class="modal-box my-auto">
          <p>
            <img
              src="../../assets/images/ktp.jpg"
              alt="ktp"
              srcset=""
              class="w-full rounded-20"
            />
          </p>
          <div class="modal-action justify-end">
            <label for="my-modal-2" class="btn btn-outline w-40">Tutup</label>
          </div>
        </div>
      </div> -->
      <!-- end of isi modal -->
      <!-- end of modal -->

      <!-- btn perbaharui -->
      <div>
        <button class="btn btn-primary my-6">Perbaharui</button>
      </div>
      <!-- end of btn perbaharui -->
    </form>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import axios from "axios";

export default {
  props: ["id"],
  name: "DataDiri",
  components: {
    Icon,
  },
  data() {
    return {
      getDataDiri: null,
      getDataProvince: null,
      getDataDistrict: null,
      getDataSubDistrict: null,
    };
  },
  created() {
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("token");
    this.getDataDiri = this.$store.dispatch("auth/getDataDiri");
    this.getDataDiri = this.$store.getters["auth/data_diri"];
    this.getDataProvince = this.$store.dispatch("address/getDataProvince");
    this.getDataProvince = this.$store.getters["address/data_province"];
    this.getDataDistrict = this.$store.dispatch("address/getDataDistrict");
    this.getDataDistrict = this.$store.getters["address/data_district"];
    this.getDataSubDistrict = this.$store.dispatch(
      "address/getDataSubDistrict"
    );
    this.getDataSubDistrict = this.$store.getters["address/data_sub_district"];
  },
  computed: {
    // Address
    getDataProvince() {
      return this.getDataProvince;
    },
    getDataDistrict() {
      return this.getDataDistrict;
    },
    getDataSubDistrict() {
      return this.getDataSubDistrict;
    },
    // Data Diri
    getDataDiri() {
      return this.$store.getters["auth/data_diri"];
    },
    getDataDiriNama() {
      return this.getDataDiri.nama;
    },
    getDataDiriNik() {
      return this.getDataDiri.nik;
    },
    getDataDiriJenisKelamin() {
      return this.getDataDiri.jenis_kelamin;
    },
    getDataDiriTempatLahir() {
      return this.getDataDiri.tempat_lahir;
    },
    getDataDiriTanggalLahir() {
      return this.getDataDiri.tanggal_lahir;
    },
    getDataDiriAgama() {
      return this.getDataDiri.agama;
    },
    getDataDiriStatusPerkawinan() {
      return this.getDataDiri.status_perkawinan;
    },
    getDataDiriDesa() {
      return this.getDataDiri.desa;
    },
    getDataDiriRT() {
      return this.getDataDiri.rt;
    },
    getDataDiriRW() {
      return this.getDataDiri.rw;
    },
    getDataDiriAlamatRumah() {
      return this.getDataDiri.alamat_rumah;
    },
    getDataDiriKodePos() {
      return this.getDataDiri.kode_pos;
    },
    getDataDiriPendidikanTerakhir() {
      return this.getDataDiri.pendidikan_terakhir;
    },
    getDataDiriNoHP() {
      return this.getDataDiri.no_hp;
    },
  },
};
</script>

<style scoped></style>
