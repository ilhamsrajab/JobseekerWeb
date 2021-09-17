<template>
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
      v-model.trim="dataDiri.nama_lengkap"
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
      v-model.trim="dataDiri.nik"
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
          class="
            focus:ring-primary-focus focus:bg-accent
            bg-gray-100
            h-5
            w-5
            text-primary
            border-1 border-gray-300
            hover:border-primary
            transition-all
            duration-200
          "
          v-model.trim="dataDiri.jenis_kelamin"
        />
        <label
          for="push-lakilaki"
          class="ml-3 block text-sm font-normal text-neutral"
        >
          Laki-laki
        </label>
      </div>
      <div class="flex items-center">
        <input
          id="push-perempuan"
          name="jenisKelamin"
          type="radio"
          class="
            focus:ring-primary-focus focus:bg-accent
            bg-gray-100
            h-5
            w-5
            text-primary
            border-1 border-gray-300
            hover:border-primary
            transition-all
            duration-200
          "
          v-model.trim="dataDiri.jenis_kelamin"
        />
        <label
          for="push-perempuan"
          class="ml-3 block text-sm font-normal text-neutral"
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
        v-model.trim="dataDiri.tempat_lahir"
      />
      <input
        id="tanggalLahir"
        title="Tanggal Lahir"
        type="date"
        class="input input-primary w-2/5"
        required
        v-model.trim="dataDiri.tanggal_lahir"
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
      class="select select-primary w-full font-normal"
      v-model.trim="dataDiri.agama"
    >
      <option disabled="disabled" selected="selected">Pilih agama</option>
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
    <select
      id="statusPerkawinan"
      class="select select-primary w-full font-normal"
      v-model.trim="dataDiri.status_perkawinan"
    >
      <option disabled="disabled" selected="selected">
        Pilih status perkawinan
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
      <select
        id="alamatProvinsi"
        class="select select-primary w-full font-normal"
        v-model.trim="dataDiri.provinsi"
      >
        <option disabled="disabled" selected="selected">Pilih provinsi</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>

    <!-- kota/kabupaten -->
    <div class="mb-1">
      <label class="label" for="alamatKota">
        <span class="label-text">Kota/Kabupaten</span>
      </label>
      <select
        id="alamatKota"
        class="select select-primary w-full font-normal"
        v-model.trim="dataDiri.kota_kabupaten"
      >
        <option disabled="disabled" selected="selected">
          Pilih kota/kabupaten
        </option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>

    <!-- kecamatan -->
    <div class="mb-1">
      <label class="label" for="alamatKecamatan">
        <span class="label-text">Kecamatan</span>
      </label>
      <select
        id="alamatKecamatan"
        class="select select-primary w-full font-normal"
        v-model.trim="dataDiri.kecamatan"
      >
        <option disabled="disabled" selected="selected">Pilih kecamatan</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>

    <!-- desa/kelurahan -->
    <div class="mb-1">
      <label class="label" for="alamatDesa">
        <span class="label-text">Desa/Kelurahan</span>
      </label>
      <select
        id="alamatDesa"
        class="select select-primary w-full font-normal"
        v-model.trim="dataDiri.desa"
      >
        <option disabled="disabled" selected="selected">
          Pilih desa/kelurahan
        </option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>

    <!-- rt/rw -->
    <div class="mb-1">
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
          v-model.trim="dataDiri.rt"
        />
        <input
          id="alamatRW"
          title="Nomor RW"
          type="number"
          maxlength="3"
          placeholder="Masukan no. RW"
          class="input input-primary w-1/2"
          required
          v-model.trim="dataDiri.rw"
        />
      </div>
    </div>

    <!-- alamat rumah -->
    <div class="mb-1">
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
          v-model.trim="dataDiri.alamat_rumah"
        />
      </div>
    </div>

    <!-- kodepos -->
    <div class="mb-1">
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
        v-model.trim="dataDiri.kode_pos"
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
      class="select select-primary w-full font-normal"
      v-model.trim="dataDiri.pendidikan"
    >
      <option disabled="disabled" selected="selected">
        Pilih pendidikan terakhir
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
        placeholder="8XX-XXXX-XXXX"
        minlength="11"
        maxlength="13"
        pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
        class="input input-primary w-full"
        style="border-radius: 0px 20px 20px 0px !important"
        required
        v-model.trim="dataDiri.no_hp"
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
        v-model.trim="dataDiri.confirmCheckbox"
      />
    </div>
    <div class="ml-3 text-sm">
      <label for="comments" class="font-normal text-neutral"
        >Saya menyatakan bahwa data di atas adalah
        <strong>benar data pribadi saya</strong>, jika ada kesalahan saya siap
        menganggung semua akibatnya.</label
      >
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
export default {
  name: "DataDiri",
  components: {},
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
input[type="date"]::-webkit-calendar-picker-indicator {
  /* display: none; */
  /* -webkit-appearance: none; */
  background: none;
  content: url("https://api.iconify.design/fluent/calendar-ltr-24-filled.svg?color=%23444");
  /* content: url("https://api.iconify.design/fluent/calendar-ltr-12-filled.svg?color=%23444"); */
}

[type="radio"]:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
}
</style>
