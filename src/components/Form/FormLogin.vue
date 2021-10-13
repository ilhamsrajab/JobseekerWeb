<template>
  <!-- logo and back btn -->
  <div class="flex justify-end">
    <!-- logo -->
    <div>
      <!-- logo dark mode -->
      <img
        src="../../assets/images/logo/BursaKerjaLogo_Black.svg"
        alt=""
        class="w-40"
      />
      <!-- logo light mode -->
      <!-- <img
              src="../assets/images/logo/BursaKerjaLogo.svg"
              alt=""
              class="w-40"
            /> -->
    </div>
  </div>
  <!-- Login -->
  <div id="login" class="flex flex-col">
    <div
      class="bg-merah text-merahDark px-6 py-4 rounded-large mt-4 -mb-4 text-sm"
      :show="!!error"
      :hidden="!error"
      @close="handleError"
    >
      <p class="flex items-center">
        <Icon icon="fluent:warning-24-filled" :inline="true" class="mr-2" />{{
          error
        }}
      </p>
    </div>
    <!-- <div :show="isLoading" fixed>
      <p>Authenticating...</p>
    </div> -->
    <!-- login form -->
    <div class="formLogin">
      <p
        class="text-4xl font-bold text-neutral self-start mt-8 dark:text-white"
      >
        Login
      </p>

      <!-- form -->
      <form
        class="form-control"
        action="#"
        method="POST"
        @submit.prevent="submitForm"
      >
        <!-- username -->
        <div>
          <label class="label mt-6" for="email">
            <span class="label-text">Email</span>
          </label>
          <input
            id="email"
            type="text"
            placeholder="Masukan alamat email"
            class="
              input input-primary
              w-full
              bg-gray-100
              dark:bg-gray-700 dark:text-white dark:text-opacity-60
            "
            v-model.trim="email"
            required
          />
        </div>

        <!-- password -->
        <div>
          <label class="label mt-4" for="password">
            <span class="label-text">Password</span>
          </label>
          <input
            id="password"
            type="password"
            autocomplete="current-password"
            placeholder="Masukan password"
            class="
              input input-primary
              w-full
              bg-gray-100
              dark:bg-gray-700 dark:text-white dark:text-opacity-60
            "
            v-model.trim="password"
            required
          />
        </div>

        <!-- btn login -->
        <div>
          <button class="btn btn-primary my-6">Login</button>
        </div>
        <!-- daftar google -->
        <div class="flex flex-col justify-center items-center">
          <span class="mb-6 text-xs dark:text-white"> atau daftar dengan </span>
          <a href="http://google.com">
            <div
              class="
                btnGoogle
                bg-white
                rounded-full
                shadow-lg
                hover:shadow-xl
                transition-all
                duration-200
                h-10
                w-10
                flex
                justify-center
                items-center
              "
            >
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                xml:space="preserve"
                height="30px"
              >
                <path
                  style="fill: #fbbb00"
                  d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
                    c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
                    C103.821,274.792,107.225,292.797,113.47,309.408z"
                />
                <path
                  style="fill: #518ef8"
                  d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
                    c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
                    c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
                />
                <path
                  style="fill: #28b446"
                  d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
                    c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
                    c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
                />
                <path
                  style="fill: #f14336"
                  d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
                    c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
                    C318.115,0,375.068,22.126,419.404,58.936z"
                />
              </svg>
            </div>
          </a>
        </div>
      </form>

      <!-- daftar -->
      <!-- <span class="font-bold text-primary flex justify-center my-6 text-sm"> -->
      <!-- <router-link :to="{ name: 'FormDaftar' }" replace
          >Daftar Sekarang ></router-link
        > -->
      <!-- <button v-on:Click="daftarSekarang">Daftar Sekarang ></button> -->
      <!-- </span> -->
    </div>
  </div>

  <!-- Daftar -->
  <!-- <signUp id="signUp" v-show="signUp" /> -->

  <span
    class="
      font-bold
      text-primary
      dark:text-accent
      flex
      justify-center
      my-6
      text-sm
    "
  >
    <router-link :to="{ name: 'HalamanDaftar' }">
      <button class="font-bold">Daftar Sekarang ></button>
    </router-link>
  </span>
</template>

<script>
import VueCarousel from "@chenfengyuan/vue-carousel";
import { Icon } from "@iconify/vue";

export default {
  name: "Login",

  components: {
    Icon,
    VueCarousel,
  },
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
      error: null,
      data: [
        "<div class='text-center mb-10 font-medium'>Cari kerja dengan mudah disini, karena terhubung dengan ratusan perusahaan yang tergabung.</div>",
        "<div class='text-center mb-10 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quidem dolorem.</div>",
        "<div class='text-center mb-10 font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim illum quasi eaque, repudiandae quidem doloremque. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</div>",
      ],
    };
  },
  methods: {
    async submitForm() {
      this.isLoading = true;

      try {
        await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        });
        this.$router.replace("/");
      } catch (err) {
        this.error = err.message || "Failed tp authenticated, try later.";
      }

      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
* {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.kotak {
  height: 650px;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.bagiankanan::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.bagiankanan {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

@media only screen and (max-width: 339px) {
  .kotak {
    height: 100%;
  }
}

@media only screen and (max-height: 768px) {
  .kotak {
    height: 550px;
  }
}
</style>
