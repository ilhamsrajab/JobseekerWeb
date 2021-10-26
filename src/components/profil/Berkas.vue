<template>
  <div class="mx-auto mt-4 z-10">
    <form class="form-control" action="#" method="POST">
      <!-- curriculumVitae -->
      <div class="mt-4">
        <label class="label font-semibold" for="curriculumVitae">
          <span class="label-text">Curriculum Vitae</span>
        </label>
        <div class="flex sm:flex-row xs:flex-col gap-2">
          <input
            id="curriculumVitae"
            type="file"
            accept=".pdf"
            title="Pilih file cv"
            class="input input-primary w-full py-3.5 px-4"
          />
          <a
            class="
              cursor-pointer
              btn btn-primary-0
              xs:w-full xs:text-2xs
              sm:w-32 sm:text-xs
              md:text-sm
              text-base
            "
            href="#"
            target="_blank"
          >
            <Icon
              icon="fluent:eye-show-24-filled"
              :inline="true"
              class="mr-1"
            />
            Lihat file
          </a>
        </div>

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
        <div class="flex sm:flex-row xs:flex-col gap-2">
          <input
            id="ijazah"
            type="file"
            accept=".pdf"
            title="Pilih file ijazah"
            class="input input-primary w-full py-3.5 px-4"
          />
          <a
            class="
              cursor-pointer
              btn btn-primary-0
              xs:w-full xs:text-2xs
              sm:w-32 sm:text-xs
              md:text-sm
              text-base
            "
            href="#"
            target="_blank"
          >
            <Icon
              icon="fluent:eye-show-24-filled"
              :inline="true"
              class="mr-1"
            />
            Lihat file
          </a>
        </div>

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
        <div class="flex sm:flex-row xs:flex-col gap-2">
          <input
            id="portofolio"
            type="file"
            accept=".pdf"
            title="Pilih file portofolio"
            class="input input-primary w-full py-3.5 px-4"
            multiple
          />
          <a
            class="
              cursor-pointer
              btn btn-primary-0
              xs:w-full xs:text-2xs
              sm:w-32 sm:text-xs
              md:text-sm
              text-base
            "
            href="#"
            target="_blank"
          >
            <Icon
              icon="fluent:eye-show-24-filled"
              :inline="true"
              class="mr-1"
            />
            Lihat file
          </a>
        </div>

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
        <div class="flex sm:flex-row xs:flex-col gap-2">
          <input
            id="sertifikat"
            type="file"
            accept=".pdf"
            title="Pilih file sertifikat"
            class="input input-primary w-full py-3.5 px-4"
            multiple
          />
          <a
            class="
              cursor-pointer
              btn btn-primary-0
              xs:w-full xs:text-2xs
              sm:w-32 sm:text-xs
              md:text-sm
              text-base
            "
            href="#"
            target="_blank"
          >
            <Icon
              icon="fluent:eye-show-24-filled"
              :inline="true"
              class="mr-1"
            />
            Lihat file
          </a>
        </div>

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
        <div class="flex sm:flex-row xs:flex-col gap-2">
          <input
            id="transkripNilai"
            type="file"
            accept=".pdf"
            title="Pilih file transkrip nilai"
            class="input input-primary w-full py-3.5 px-4"
            multiple
          />
          <a
            class="
              cursor-pointer
              btn btn-primary-0
              xs:w-full xs:text-2xs
              sm:w-32 sm:text-xs
              md:text-sm
              text-base
            "
            href="#"
            target="_blank"
          >
            <Icon
              icon="fluent:eye-show-24-filled"
              :inline="true"
              class="mr-1"
            />
            Lihat file
          </a>
        </div>

        <label class="label">
          <p href="#" class="label-text-alt text-gray-500">
            * Transkrip nilai pendidikan terakhir. Upload dengan format PDF
            maksimal 7 MB. Jika tidak memiliki berkas, tidak perlu diisi.
          </p>
        </label>
      </div>

      <!-- btn selanjutnya -->
      <div>
        <button class="btn btn-primary my-6">Perbaharui</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Berkas",
  components: {},
};
</script>

<style scoped></style>
