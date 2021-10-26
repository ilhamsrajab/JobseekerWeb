<template>
  <div class="mx-auto mt-4 z-10">
    <!-- list perusahaan -->
    <div
      v-for="riwayat_pekerjaan in getDataRiwayatPekerjaan"
      :key="riwayat_pekerjaan"
    >
      <div
        class="
          p-4
          hover:bg-gray-50
          dark:hover:bg-gray-800
          rounded-large
          duration-200
          transition-all
        "
      >
        <label for="my-modal-2" class="cursor-pointer">
          <div class="label-text font-semibold mb-2">
            {{ riwayat_pekerjaan.nama_perusahaan }}
          </div>
          <div class="flex justify-between">
            <span class="text-sm dark:text-white dark:text-opacity-80">{{
              riwayat_pekerjaan.posisi
            }}</span>
            <span class="text-sm dark:text-white dark:text-opacity-80"
              >{{ riwayat_pekerjaan.tahun_masuk }} -
              {{ riwayat_pekerjaan.tahun_keluar }}</span
            >
          </div>
        </label>
      </div>
      <div class="my-2 bg-gray-100 dark:bg-gray-700 h-0.5"></div>

      <!-- modal -->
      <input type="checkbox" id="my-modal-2" class="modal-toggle" />
      <!-- isi modal -->
      <div class="modal overflow-y-auto">
        <div class="modal-box my-auto">
          <!-- nama perusahaan -->
          <div class="mt-4">
            <label class="label" for="namaPerusahaan">
              <span class="label-text font-semibold">Nama Perusahaan</span>
            </label>
            <input
              id="namaPerusahaan"
              title="Nama Perusahaan"
              type="text"
              placeholder="Masukan nama perusahaan"
              class="input input-primary w-full"
              :value="riwayat_pekerjaan.nama_perusahaan"
            />
          </div>

          <!-- Tahun masuk -->
          <div class="mt-4">
            <label class="label" for="tahunMasuk">
              <span class="label-text font-semibold">Tahun Masuk</span>
            </label>
            <input
              id="tahunMasuk"
              title="Tahun masuk"
              type="month"
              class="input input-primary w-full"
            />
          </div>

          <!-- Tahun Keluar -->
          <div class="mt-4">
            <label class="label" for="tahunKeluar">
              <span class="label-text font-semibold">Tahun Keluar</span>
            </label>
            <input
              id="tahunKeluar"
              title="Tahun Keluar"
              type="month"
              class="input input-primary w-full"
            />
          </div>

          <!-- posisi kerja -->
          <div class="mt-4">
            <label class="label" for="posisi">
              <span class="label-text font-semibold">Posisi Kerja</span>
            </label>
            <input
              id="posisi"
              title="Posisi Kerja"
              type="text"
              placeholder="Masukan Posisi Kerja"
              class="input input-primary w-full"
              :value="riwayat_pekerjaan.posisi"
            />
          </div>

          <!-- deskripsi pekerjaan -->
          <div class="mt-4">
            <label class="label" for="deskripsiPekerjaan">
              <span class="label-text font-semibold">Deskripsi Pekerjaan</span>
            </label>
            <div class="mt-1">
              <textarea
                id="deskripsiPekerjaan"
                title="Deskripsi pekerjaan"
                rows="3"
                class="textarea"
                placeholder="Tuliskan deskripsi pekerjaan dengan singkat"
                :value="riwayat_pekerjaan.deskripsi_pekerjaan"
              />
            </div>
          </div>

          <!-- alasan resign -->
          <div class="mt-4">
            <label class="label" for="alasanResign">
              <span class="label-text font-semibold">Alasan Resign</span>
            </label>
            <input
              id="alasanResign"
              title="Alasan Resign"
              type="text"
              placeholder="Masukan Alasan Resign"
              class="input input-primary w-full"
              :value="riwayat_pekerjaan.alasan_resign"
            />
          </div>

          <!-- dokumen Pendukung -->
          <div class="mt-4">
            <label class="label font-semibold" for="dokumenPendukung">
              <span class="label-text">Dokumen Pendukung</span>
            </label>
            <div class="flex sm:flex-row xs:flex-col gap-2">
              <input
                id="dokumenPendukung"
                type="file"
                accept=".pdf"
                title="Pilih file dokumen pendukung"
                class="input input-primary w-full py-3.5 px-4"
              />
              <label
                for="my-modal-3"
                class="
                  cursor-pointer
                  btn btn-primary-0
                  xs:w-full xs:text-2xs
                  sm:w-32 sm:text-xs
                  md:text-sm
                  text-base
                "
              >
                <Icon
                  icon="fluent:eye-show-24-filled"
                  :inline="true"
                  class="mr-1"
                />
                Lihat file
              </label>
            </div>
            <label class="label">
              <p href="#" class="label-text-alt">
                * Upload dengan format PDF maksimal 7 MB. Jika tidak memiliki
                berkas, tidak perlu diisi.
              </p>
            </label>

            <!-- modal dokumen pendukung -->
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <!-- isi modal -->
            <div class="modal overflow-y-auto shadow-xl">
              <div class="modal-box my-auto">
                <p>
                  <img
                    src="../../assets/images/ktp.jpg"
                    alt="ktp"
                    srcset=""
                    class="w-full rounded-20"
                  />
                </p>
                <div class="modal-action justify-end">
                  <label for="my-modal-3" class="btn btn-outline w-40"
                    >Tutup</label
                  >
                </div>
              </div>
            </div>
            <!-- end of isi modal -->
            <!-- end of modal -->
          </div>

          <!-- batas -->
          <hr class="my-5" />
          <div class="modal-action justify-end">
            <label for="my-modal-2" class="btn btn-outline w-40">Batal</label>
            <div class="w-40">
              <label for="my-modal-2" class="btn btn-primary w-40"
                >Perbaharui</label
              >
            </div>
          </div>
        </div>
      </div>
      <!-- end of isi modal -->
    </div>
    <!-- end of list perusahaan -->

    <!-- tambah perusahaan -->
    <form class="form-control" action="#" method="POST">
      <!-- tambah riwayat pekerjaan -->
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
          dark:hover:bg-gray-800 dark:hover:border-purple-400
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
              dark:text-purple-400 dark:group-hover:text-purple-400
              transition-all
              duration-200
            "
          >
            <span>+ Tambah Riwayat Pekerjaan</span>
          </label>
        </div>
      </div>
      <label class="label mb-4">
        <p href="#" class="label-text-alt text-gray-500">
          * Jika tidak memiliki riwayat pekerjaan, maka tidak perlu mengisinya.
        </p>
      </label>

      <!-- btn selanjutnya -->
      <!-- <div>
        <button class="btn btn-primary my-6">Perbaharui</button>
      </div> -->
    </form>
    <!-- end of tambah perusahaan -->
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import axios from "axios";

export default {
  name: "RiwayatPekerjaan",
  components: {
    Icon,
  },
  data() {
    return {
      getDataRiwayatPekerjaan: null,
    };
  },
  created() {
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("token");
    this.getDataRiwayatPekerjaan = this.$store.dispatch(
      "auth/getDataRiwayatPekerjaan"
    );
    this.getDataRiwayatPekerjaan =
      this.$store.getters["auth/data_riwayat_pekerjaan"];
  },
  computed: {
    getDataRiwayatPekerjaan() {
      return this.$store.getters["auth/data_riwayat_pekerjaan"];
    },
  },
};
</script>

<style scoped>
.divider {
  display: flex;
  align-items: center;
  height: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: aqua;
}
</style>
