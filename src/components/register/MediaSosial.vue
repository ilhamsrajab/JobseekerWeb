<template>
  <div class="mx-auto mt-4 z-10" style="width: 600px">
    <form class="form-control" action="#" method="POST">
      <!-- instagram -->
      <div class="mt-4">
        <label class="label font-semibold" for="instagram">
          <span class="label-text">Instagram</span>
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
            @
          </span>
          <input
            id="instagram"
            title="Instagram"
            type="text"
            placeholder="username"
            class="input input-primary w-full"
            style="border-radius: 0px 20px 20px 0px !important"
          />
        </div>
        <label class="label">
          <p href="#" class="label-text-alt text-gray-500">
            * Jika tidak memiliki akun, tidak perlu diisi
          </p>
        </label>
      </div>

      <!-- Twitter -->
      <div class="mt-2">
        <label class="label font-semibold" for="Twitter">
          <span class="label-text">Twitter</span>
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
            @
          </span>
          <input
            id="Twitter"
            title="Twitter"
            type="text"
            placeholder="username"
            class="input input-primary w-full"
            style="border-radius: 0px 20px 20px 0px !important"
          />
        </div>
        <label class="label">
          <p href="#" class="label-text-alt text-gray-500">
            * Jika tidak memiliki akun, tidak perlu diisi
          </p>
        </label>
      </div>

      <!-- facebook -->
      <div class="mt-2">
        <label class="label font-semibold" for="facebook">
          <span class="label-text">Facebook</span>
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
            facebook.com/
          </span>
          <input
            id="facebook"
            title="Facebook"
            type="text"
            placeholder="username"
            class="input input-primary w-full"
            style="border-radius: 0px 20px 20px 0px !important"
          />
        </div>
        <label class="label">
          <p href="#" class="label-text-alt text-gray-500">
            * Jika tidak memiliki akun, tidak perlu diisi
          </p>
        </label>
      </div>

      <!-- LinkedIn -->
      <div class="mt-2">
        <label class="label font-semibold" for="LinkedIn">
          <span class="label-text">LinkedIn</span>
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
            linkedin.com/
          </span>
          <input
            id="LinkedIn"
            title="LinkedIn"
            type="text"
            placeholder="username"
            class="input input-primary w-full"
            style="border-radius: 0px 20px 20px 0px !important"
          />
        </div>
        <label class="label">
          <p href="#" class="label-text-alt text-gray-500">
            * Jika tidak memiliki akun, tidak perlu diisi
          </p>
        </label>
      </div>

      <!-- youtube -->
      <div class="mt-2">
        <label class="label font-semibold" for="YouTube">
          <span class="label-text">YouTube</span>
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
            youtube.com/
          </span>
          <input
            id="YouTube"
            title="YouTube"
            type="text"
            placeholder="username"
            class="input input-primary w-full"
            style="border-radius: 0px 20px 20px 0px !important"
          />
        </div>
        <label class="label">
          <p href="#" class="label-text-alt text-gray-500">
            * Jika tidak memiliki akun, tidak perlu diisi
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
          hover:shadow-xl hover:bg-primary hover:border-primary
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
  name: "DataDiri",
  components: {},
};
</script>

<style scoped></style>
