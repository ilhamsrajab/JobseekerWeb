<template>
  <!-- tambah riwayat pekerjaan -->

  <form-riwayat-pekerjaan v-for="item in items" :key="item.id">
  </form-riwayat-pekerjaan>

  <div
    class="
      group
      mt-4
      flex
      justify-center
      items-center
      px-6
      pt-5
      pb-6
      rounded-20
      border-2 border-gray-300 border-dashed
      hover:border-primary hover:bg-gray-100
      transition-all
      duration-200
    "
  >
    <div class="flex text-sm">
      <label
        for="file-upload"
        class="
          relative
          cursor-pointer
          font-medium
          text-primary
          group-hover:text-primary
          transition-all
          duration-200
        "
      >
        <span @click="addRiwayatPekerjaan"> + Tambah Riwayat Pekerjaan</span>
      </label>
    </div>
  </div>
  <label class="label mb-4">
    <p href="#" class="label-text-alt text-gray-500">
      * Jika tidak memiliki riwayat pekerjaan, maka tidak perlu mengisinya.
    </p>
  </label>

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
import FormRiwayatPekerjaan from "../Form/FormRiwayatPekerjaan.vue";

export default {
  name: "RiwayatPekerjaan",
  components: {
    FormRiwayatPekerjaan,
  },
  data() {
    return {
      items: [
        {
          id: 0,
        },
      ],
      nextItemsId: 1,
    };
  },
  methods: {
    addRiwayatPekerjaan() {
      this.items.push({
        id: this.items.nextItemsId++,
      }),
        console.log(this.items);
    },
  },
};
</script>

<style scoped>
input[type="month"]::-webkit-calendar-picker-indicator {
  background: none;
  content: url("https://api.iconify.design/fluent/calendar-ltr-24-filled.svg?color=%23444");
}

input[type="file"]::file-selector-button {
  content: url("https://api.iconify.design/fluent/cloud-add-16-filled.svg") !important;
}

/* Chrome, Edge & Safari
input[type="file"]::-webkit-file-upload-button {
  background-image: url("https://api.iconify.design/fluent/cloud-add-16-filled.svg");
} */

.divider {
  display: flex;
  align-items: center;
  height: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: aqua;
}
</style>
