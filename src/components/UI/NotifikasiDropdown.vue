<template>
  <ul
    tabindex="1"
    class="max-h-96 top-6 right-0 my-4 p-2 space-y-2 shadow-xl menu border dropdown-content bg-white text-gray-500 rounded-box sm:w-96 xs:w-80 text-sm overflow-y-auto dark:bg-gray-800 dark:border-gray-900 dark:text-white"
  >
    <li
      id="notif"
      class="flex flex-row sm:px-5 sm:py-3 xs:px-3 xs:py-3 rounded-large cursor-pointer dark:text-white dark:text-opacity-80 dark:hover:bg-opacity-20 transition-all duration-200"
    >
      Belum ada notifikasi.
    </li>
    <!-- <Notifikasi class="new-notification">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore possimus
      fugiat blanditiis facilis reiciendis esse, nesciunt commodi itaque
      exercitationem et, fuga temporibus, quos iusto magni. Assumenda aspernatur
      delectus distinctio dolorum.
    </Notifikasi>
    <Notifikasi
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
      recusandae? Omnis, deserunt earum! Dicta sint illo corporis!
      Perferendis.</Notifikasi
    >
    <Notifikasi
      >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit,
      dicta!</Notifikasi
    > -->

    <div class="my-2 bg-gray-100 dark:bg-gray-700 h-0.5" />

    <li
      class="px-5 py-3 rounded-large dark:text-white dark:text-opacity-80 dark:hover:bg-opacity-20 hover:bg-gray-100 hover:text-opacity-80 transition-all duration-200"
    >
      <router-link :to="{ name: 'HalamanNotifikasi' }">
        <span class="text-primary dark:text-purple-300 dark:text-opacity-80">
          Lihat lainnya..
        </span>
      </router-link>
    </li>
  </ul>
</template>

<script>
import Notifikasi from "../../components/UI/Notifikasi.vue";

export default {
  components: {
    Notifikasi,
  },
};
</script>
