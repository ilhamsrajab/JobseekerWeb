<template>
  <div class="mx-auto mt-4 z-10">
    <form class="form-control" action="#" method="POST">
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
            class="input input-primary w-full"
            style="border-radius: 0px 20px 20px 0px !important"
            :value="getDataMediaSosialInstagram"
          />
        </div>
        <label class="label">
          <p href="#" class="label-text-alt">
            * Jika tidak memiliki akun, tidak perlu diisi
          </p>
        </label>
      </div>

      <!-- Twitter -->
      <div class="mt-4">
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
            class="input input-primary w-full"
            style="border-radius: 0px 20px 20px 0px !important"
            :value="getDataMediaSosialTwitter"
          />
        </div>
        <label class="label">
          <p href="#" class="label-text-alt">
            * Jika tidak memiliki akun, tidak perlu diisi
          </p>
        </label>
      </div>

      <!-- facebook -->
      <div class="mt-4">
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
            class="input input-primary w-full"
            style="border-radius: 0px 20px 20px 0px !important"
            :value="getDataMediaSosialFacebook"
          />
        </div>
        <label class="label">
          <p href="#" class="label-text-alt">
            * Jika tidak memiliki akun, tidak perlu diisi
          </p>
        </label>
      </div>

      <!-- LinkedIn -->
      <div class="mt-4">
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
            class="input input-primary w-full"
            style="border-radius: 0px 20px 20px 0px !important"
            :value="getDataMediaSosialLinkedin"
          />
        </div>
        <label class="label">
          <p href="#" class="label-text-alt">
            * Jika tidak memiliki akun, tidak perlu diisi
          </p>
        </label>
      </div>

      <!-- youtube -->
      <div class="mt-4">
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
            class="input input-primary w-full"
            style="border-radius: 0px 20px 20px 0px !important"
            :value="getDataMediaSosialYoutube"
          />
        </div>
        <label class="label">
          <p href="#" class="label-text-alt">
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
import axios from "axios";

export default {
  name: "MediaSosial",
  components: {
    Icon,
  },
  data() {
    return {
      getDataMediaSosial: null,
    };
  },
  created() {
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("token");
    this.getDataMediaSosial = this.$store.dispatch("auth/getDataDiri");
    this.getDataMediaSosial = this.$store.getters["auth/data_diri"];
  },
  computed: {
    // Media Sosial
    getDataMediaSosialInstagram() {
      return this.getDataMediaSosial.instagram
        .split("@")
        .join("")
        .split(",")
        .join("");
    },
    getDataMediaSosialTwitter() {
      return this.getDataMediaSosial.twitter
        .split("@")
        .join("")
        .split(",")
        .join("");
    },
    getDataMediaSosialFacebook() {
      return this.getDataMediaSosial.facebook
        .split("facebook.com/")
        .join("")
        .split(",")
        .join("");
    },
    getDataMediaSosialLinkedin() {
      return this.getDataMediaSosial.linkedIn
        .split("linkedin.com/")
        .join("")
        .split(",")
        .join("");
    },
    getDataMediaSosialYoutube() {
      return this.getDataMediaSosial.youtube
        .split("youtube.com/")
        .join("")
        .split(",")
        .join("");
    },
  },
};
</script>

<style scoped></style>
