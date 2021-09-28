<template>
  <div class="mx-auto mt-4 z-10">
    <form class="form-control" action="#" method="POST">
      <!-- nama perusahaan -->
      <div class="mt-4">
        <label class="label" for="namaPerusahaan">
          <span class="label-text text-neutral font-semibold"
            >Nama Perusahaan</span
          >
        </label>
        <input
          id="namaPerusahaan"
          title="Nama Perusahaan"
          type="text"
          placeholder="Masukan nama perusahaan"
          class="input input-primary bg-gray-100 w-full"
        />
      </div>

      <!-- Tahun masuk -->
      <div class="mt-4">
        <label class="label" for="tahunMasuk">
          <span class="label-text text-neutral font-semibold">Tahun Masuk</span>
        </label>
        <input
          id="tahunMasuk"
          title="Tahun masuk"
          type="month"
          class="input input-primary bg-gray-100 w-full"
        />
      </div>

      <!-- Tahun Keluar -->
      <div class="mt-4">
        <label class="label" for="tahunKeluar">
          <span class="label-text text-neutral font-semibold"
            >Tahun Keluar</span
          >
        </label>
        <input
          id="tahunKeluar"
          title="Tahun Keluar"
          type="month"
          class="input input-primary bg-gray-100 w-full"
        />
      </div>

      <!-- posisi kerja -->
      <div class="mt-4">
        <label class="label" for="posisi">
          <span class="label-text text-neutral font-semibold"
            >Posisi Kerja</span
          >
        </label>
        <input
          id="posisi"
          title="Posisi Kerja"
          type="text"
          placeholder="Masukan Posisi Kerja"
          class="input input-primary bg-gray-100 w-full"
        />
      </div>

      <!-- deskripsi pekerjaan -->
      <div class="mt-4">
        <label class="label" for="deskripsiPekerjaan">
          <span class="label-text text-neutral font-semibold"
            >Deskripsi Pekerjaan</span
          >
        </label>
        <div class="mt-1">
          <textarea
            id="deskripsiPekerjaan"
            title="Deskripsi pekerjaan"
            rows="3"
            class="textarea bg-gray-100"
            placeholder="Tuliskan deskripsi pekerjaan dengan singkat"
          />
        </div>
      </div>

      <!-- alasan resign -->
      <div class="mt-4">
        <label class="label" for="alasanResign">
          <span class="label-text text-neutral font-semibold"
            >Alasan Resign</span
          >
        </label>
        <input
          id="alasanResign"
          title="Alasan Resign"
          type="text"
          placeholder="Masukan Alasan Resign"
          class="input input-primary bg-gray-100 w-full"
        />
      </div>

      <!-- dokumen Pendukung -->
      <div class="mt-4">
        <label class="label font-semibold" for="dokumenPendukung">
          <span class="label-text text-neutral">Dokumen Pendukung</span>
        </label>
        <input
          id="dokumenPendukung"
          type="file"
          accept=".pdf"
          title="Pilih file dokumen pendukung"
          class="input input-primary bg-gray-100 w-full py-3.5 px-4"
        />
        <label class="label">
          <p href="#" class="label-text-alt text-gray-500">
            * Upload dengan format PDF maksimal 7 MB. Jika tidak memiliki
            berkas, tidak perlu diisi.
          </p>
        </label>
      </div>
      <hr class="my-5" />

      <!-- tambah riwayat pekerjaan -->
      <div
        class="
          group
          mt-4
          flex
          justify-center
          px-6
          pt-5
          pb-6
          rounded-20
          border-2 border-gray-300 border-dashed
          hover:border-primary hover:bg-gray-100
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
              transition-all
              duration-200
            "
          >
            <span>+ Tambah Riwayat Pekerjaan</span>
          </label>
        </div>
      </div>
      <label class="label mb-4">
        <p href="#" class="label-text-alt text-gray-500">
          * Jika tidak memiliki riwayat pekerjaan, maka tidak perlu mengisinya.
        </p>
      </label>

      <!-- btn selanjutnya -->
      <div>
        <button class="btn btn-primary my-6">Perbaharui</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "RiwayatPekerjaan",
  components: {},
};
</script>

<style scoped>
input[type="month"]::-webkit-calendar-picker-indicator {
  background: none;
  content: url("https://api.iconify.design/fluent/calendar-ltr-24-filled.svg?color=%23444");
}

input[type="file"]::file-selector-button {
  content: url("https://api.iconify.design/fluent/cloud-add-16-filled.svg") !important;
}

/* Chrome, Edge & Safari
input[type="file"]::-webkit-file-upload-button {
  background-image: url("https://api.iconify.design/fluent/cloud-add-16-filled.svg");
} */

.divider {
  display: flex;
  align-items: center;
  height: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: aqua;
}
</style>
