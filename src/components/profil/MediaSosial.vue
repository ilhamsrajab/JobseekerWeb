<template>
  <div class="mx-auto mt-4 z-10">
    <form class="form-control" action="#" method="POST">
      <!-- instagram -->
      <div class="mt-4">
        <label class="label font-semibold" for="instagram">
          <span class="label-text text-neutral">Instagram</span>
        </label>
        <div class="mt-1 flex rounded-md shadow-sm">
          <span
            class="
              inline-flex
              text-neutral
              font-medium
              items-center
              px-5
              rounded-l-20
              bg-accent
              text-lg
            "
          >
            <Icon icon="fluent:mention-24-filled" />
          </span>
          <input
            id="instagram"
            title="Instagram"
            type="text"
            placeholder="username"
            class="input input-primary bg-gray-100 w-full"
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
      <div class="mt-1">
        <label class="label font-semibold" for="Twitter">
          <span class="label-text text-neutral">Twitter</span>
        </label>
        <div class="mt-1 flex rounded-md shadow-sm">
          <span
            class="
              inline-flex
              text-neutral
              font-medium
              items-center
              px-5
              rounded-l-20
              bg-accent
              text-lg
            "
          >
            <Icon icon="fluent:mention-24-filled" />
          </span>

          <input
            id="Twitter"
            title="Twitter"
            type="text"
            placeholder="username"
            class="input input-primary bg-gray-100 w-full"
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
      <div class="mt-1">
        <label class="label font-semibold" for="facebook">
          <span class="label-text text-neutral">Facebook</span>
        </label>
        <div class="mt-1 flex rounded-md shadow-sm">
          <span
            class="
              inline-flex
              text-neutral
              font-medium
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
            class="input input-primary bg-gray-100 w-full"
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
      <div class="mt-1">
        <label class="label font-semibold" for="LinkedIn">
          <span class="label-text text-neutral">LinkedIn</span>
        </label>
        <div class="mt-1 flex rounded-md shadow-sm">
          <span
            class="
              inline-flex
              text-neutral
              font-medium
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
            class="input input-primary bg-gray-100 w-full"
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
      <div class="mt-1">
        <label class="label font-semibold" for="YouTube">
          <span class="label-text text-neutral">YouTube</span>
        </label>
        <div class="mt-1 flex rounded-md shadow-sm">
          <span
            class="
              inline-flex
              text-neutral
              font-medium
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
            class="input input-primary bg-gray-100 w-full"
            style="border-radius: 0px 20px 20px 0px !important"
          />
        </div>
        <label class="label">
          <p href="#" class="label-text-alt text-gray-500">
            * Jika tidak memiliki akun, tidak perlu diisi
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
import { Icon } from "@iconify/vue";

export default {
  name: "MediaSosial",
  components: {
    Icon,
  },
};
</script>

<style scoped></style>
