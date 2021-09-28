<template>
  <!-- instagram -->
  <div class="mt-4">
    <label class="label font-semibold" for="instagram">
      <span class="label-text">Instagram</span>
    </label>
    <div class="mt-1 flex">
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
        class="input input-primary w-full bg-gray-100"
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
      <span class="label-text">Twitter</span>
    </label>
    <div class="mt-1 flex">
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
        class="input input-primary w-full bg-gray-100"
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
      <span class="label-text">Facebook</span>
    </label>
    <div class="mt-1 flex">
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
        class="input input-primary w-full bg-gray-100"
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
      <span class="label-text">LinkedIn</span>
    </label>
    <div class="mt-1 flex">
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
        class="input input-primary w-full bg-gray-100"
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
      <span class="label-text">YouTube</span>
    </label>
    <div class="mt-1 flex">
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
        class="input input-primary w-full bg-gray-100"
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
        <strong>benar data pribadi saya</strong>, jika ada kesalahan saya siap
        menanggung semua akibatnya.</label
      >
    </div>
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
