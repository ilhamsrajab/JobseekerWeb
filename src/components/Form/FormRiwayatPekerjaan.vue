<template>
  <!-- nama perusahaan -->
  <div class="mt-4">
    <label class="label" for="namaPerusahaan">
      <span class="label-text font-semibold">Nama Perusahaan</span>
    </label>
    <input
      id="namaPerusahaan"
      title="Nama Perusahaan"
      type="text"
      placeholder="Masukan nama perusahaan"
      class="input input-primary w-full"
      v-model="item.nama_perusahaan"
    />
  </div>

  <!-- Tahun masuk -->
  <div class="mt-4">
    <label class="label" for="tahunMasuk">
      <span class="label-text font-semibold">Tahun Masuk</span>
    </label>
    <input
      id="tahunMasuk"
      title="Tahun masuk"
      type="month"
      class="input input-primary w-full"
      v-model="item.tahun_masuk"
    />
  </div>

  <!-- Tahun Keluar -->
  <div class="mt-4">
    <label class="label" for="tahunKeluar">
      <span class="label-text font-semibold">Tahun Keluar</span>
    </label>
    <input
      id="tahunKeluar"
      title="Tahun Keluar"
      type="month"
      class="input input-primary w-full"
      v-model="item.tahun_keluar"
    />
  </div>

  <!-- posisi kerja -->
  <div class="mt-4">
    <label class="label" for="posisi">
      <span class="label-text font-semibold">Posisi Kerja</span>
    </label>
    <input
      id="posisi"
      title="Posisi Kerja"
      type="text"
      placeholder="Masukan Posisi Kerja"
      class="input input-primary w-full"
      v-model="item.posisi_kerja"
    />
  </div>

  <!-- deskripsi pekerjaan -->
  <div class="mt-4">
    <label class="label" for="deskripsiPekerjaan">
      <span class="label-text font-semibold">Deskripsi Pekerjaan</span>
    </label>
    <div class="mt-1">
      <textarea
        id="deskripsiPekerjaan"
        title="Deskripsi pekerjaan"
        rows="3"
        class="textarea"
        placeholder="Tuliskan deskripsi pekerjaan dengan singkat"
        v-model="item.deskripsi_pekerjaan"
      />
    </div>
  </div>

  <!-- alasan resign -->
  <div class="mt-4">
    <label class="label" for="alasanResign">
      <span class="label-text font-semibold">Alasan Resign</span>
    </label>
    <input
      id="alasanResign"
      title="Alasan Resign"
      type="text"
      placeholder="Masukan Alasan Resign"
      class="input input-primary w-full"
      v-model="item.alasan_resign"
    />
  </div>

  <!-- dokumen Pendukung -->
  <!-- <div class="mt-4">
    <label class="label font-semibold" for="dokumenPendukung">
      <span class="label-text">Dokumen Pendukung</span>
    </label>
    <input
      id="dokumenPendukung"
      type="file"
      accept=".pdf"
      title="Pilih file dokumen pendukung"
      class="input input-primary w-full py-3.5 px-4"
      @change="onFileSelectedDokumenPendukung"
    />
    <label class="label">
      <p href="#" class="label-text-alt">
        * Upload dengan format PDF maksimal 7 MB. Jika tidak memiliki berkas,
        tidak perlu diisi.
      </p>
    </label>
  </div> -->
  <div class="my-5 h-0.5 bg-gray-200 dark:bg-white dark:bg-opacity-20" />
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {};
  },
};
</script>
