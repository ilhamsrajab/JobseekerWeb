<template>
  <div class="flex flex-col items-center min-h-screen">
    <!-- image -->
    <div class="flex items-center">
      <img
        alt="avatar"
        class="w-40 rounded-full select-disabled group-hover:rotate-3 transform"
        src="../assets/images/avatar.png"
      />
    </div>

    <!-- nama -->
    <div class="leading-6 mt-4 mb-10 text-center">
      <h4 class="font-bold dark:text-white text-2xl">Jerome Bell</h4>
      <h5 id="email" class="font-medium text-gray-500 dark:text-gray-300">
        jeromebell24@gmail.com
      </h5>
    </div>

    <!-- tab -->
    <div class="bg-gray-50 py-4 rounded-large px-1 space-x-2 text-gray-400">
      <a
        href="#"
        class="
          bg-primary
          text-white
          rounded-large
          px-6
          py-3
          transition-all
          duration-200
        "
        >Data Diri</a
      >
      <a
        href="#"
        class="
          hover:text-neutral
          rounded-large
          px-6
          py-3
          transition-all
          duration-200
        "
        >Media Sosial</a
      >
      <a
        href="#"
        class="
          hover:text-neutral
          rounded-large
          px-6
          py-3
          transition-all
          duration-200
        "
        >Berkas</a
      >
      <a
        href="#"
        class="
          hover:text-neutral
          rounded-large
          px-6
          py-3
          transition-all
          duration-200
        "
        >Riwayat Pekerjaan</a
      >
    </div>
  </div>
</template>

<style scoped>
* {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
