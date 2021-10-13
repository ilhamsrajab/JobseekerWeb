<template>
  <div id="login" class="flex flex-col">
    <!-- logo and back btn -->
    <div class="flex justify-between">
      <!-- icon kembali -->
      <div id="iconBack" class="flex self-start">
        <!-- icon -->
        <router-link :to="{ name: 'HalamanLogin' }">
          <button>
            <Icon
              icon="fluent:arrow-left-12-filled"
              class="
                rounded-full
                h-8
                w-8
                p-1.5
                dark:text-white dark:hover:text-merahDark
                hover:bg-accent
                transition-all
                duration-200
              "
            />
          </button>
        </router-link>
      </div>
      <div></div>
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
    <!-- daftar form -->
    <div class="formLogin">
      <p
        class="text-4xl font-bold text-neutral self-start mt-8 dark:text-white"
      >
        Daftar
      </p>
      <form
        class="form-control"
        action="#"
        method="POST"
        @submit.prevent="submitForm"
      >
        <!-- email -->
        <div>
          <label class="label mt-6" for="email">
            <span class="label-text">Email</span>
          </label>
          <input
            id="email"
            title="Masukan email"
            type="email"
            autocomplete="email"
            placeholder="contoh@bursakerja.com"
            class="input input-primary w-full"
            required
            v-model.trim="email"
          />
        </div>

        <!-- username -->
        <div>
          <label class="label mt-4" for="username">
            <span class="label-text">Username</span>
          </label>
          <input
            id="username"
            title="Masukan username"
            type="text"
            placeholder="Masukan username"
            class="input input-primary w-full"
            required
            v-model.trim="username"
          />
        </div>

        <!-- password -->
        <div>
          <label class="label mt-4" for="password">
            <span class="label-text">Password</span>
          </label>

          <input
            id="password"
            title="Masukan password"
            type="password"
            autocomplete="current-password"
            placeholder="Masukan password"
            class="input input-primary w-full"
            required
            v-model.trim="password"
          />
          <!-- <label class="label" v-if="!formIsValid">
            <p href="#" class="label-text-alt text-red-500 dark:text-red-400">
              * Tolong isikan email yang valid dan password minimal 8 huruf
            </p>
          </label> -->
        </div>

        <!-- konfirmasi password -->
        <div>
          <label class="label mt-4" for="konfirmasi">
            <span
              class="
                label-text
                font-semibold
                dark:text-white dark:text-opacity-80
              "
              >Konfirmasi Password</span
            >
          </label>
          <input
            id="konfirmasi"
            title="Masukan konfirmasi password"
            type="password"
            placeholder="Masukan kembali password"
            class="
              input input-primary
              w-full
              bg-gray-100
              dark:bg-gray-700 dark:text-white dark:text-opacity-60
            "
            required
            v-model.trim="password_confirmation"
          />
        </div>

        <!-- btn daftar -->

        <div>
          <button class="btn btn-primary my-6">Daftar</button>
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
                mb-6
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
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  name: "Login",
  components: {
    Icon,
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
      role: "jobseeker",
    };
  },
  methods: {
    submitForm() {
      this.$store.dispatch("register", {
        username: this.username,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
        role: this.role,
      });
    },
  },
};
</script>
