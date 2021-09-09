<template>
  <div class="mx-auto mt-4 z-10" style="width: 600px">
    <form class="form-control" action="#" method="POST">
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
        />
        <label class="label">
          <p href="#" class="label-text-alt text-gray-500">
            * Upload dengan format PDF maksimal 7 MB. Bisa upload beberapa file.
            Jika tidak memiliki berkas, tidak perlu diisi.
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
        />
        <label class="label">
          <p href="#" class="label-text-alt text-gray-500">
            * Upload dengan format PDF maksimal 7 MB. Bisa upload beberapa file.
            Jika tidak memiliki berkas, tidak perlu diisi.
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
          />
        </div>
        <div class="ml-3 text-sm">
          <label for="comments" class="font-normal text-neutral"
            >Saya menyatakan bahwa data di atas adalah
            <strong>benar data pribadi saya</strong>, jika ada kesalahan saya
            siap menganggung semua akibatnya.</label
          >
        </div>
      </div>

      <!-- btn selanjutnya -->
      <div>
        <button class="btn btn-primary mt-6 mb-3">Selanjutnya</button>
      </div>
    </form>
    <!-- btn skip -->
    <div>
      <button
        class="
          btn btn-outline
          border-2 border-primary
          text-primary
          h-14
          w-full
          rounded-20
          shadow-lg
          hover:shadow-xl
          hover:bg-accent
          hover:border-transparent
          hover:text-neutral
          transition-all
          duration-200
          normal-case
        "
      >
        Lewati
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Berkas",
  components: {},
};
</script>

<style scoped>
input[type="file"]::file-selector-button::after {
  background: none;
  content: url("https://api.iconify.design/fluent/cloud-add-16-filled.svg");
}
</style>
