<template>
  <ul
    tabindex="1"
    class="
      top-6
      right-0
      my-4
      p-2
      shadow-xl
      menu
      border
      dropdown-content
      bg-white
      rounded-box
      sm:w-96
      xs:w-80
      text-sm
      overflow-y-auto
      dark:bg-gray-800 dark:border-gray-900 dark:text-white
    "
  >
    <li
      id="notif"
      class="
        flex flex-row
        sm:px-5 sm:py-2
        xs:px-3 xs:py-2
        rounded-large
        dark:text-white dark:text-opacity-80
        transition-all
        duration-200
      "
    >
      <!-- Waktu Kerja -->
      <div class="mt-2">
        <label class="label" for="waktuKerja">
          <span class="label-text font-semibold">Waktu Kerja</span>
        </label>
        <select id="waktuKerja" class="select select-primary w-full">
          <option disabled="disabled" selected="selected">
            Pilih Waktu Kerja
          </option>
          <option>Full Time</option>
          <option>Part Time</option>
          <option>Kontrak</option>
          <option>Magang</option>
        </select>
      </div>
    </li>

    <li
      id="notif"
      class="
        flex flex-row
        sm:px-5 sm:py-2
        xs:px-3 xs:py-2
        rounded-large
        dark:text-white dark:text-opacity-80
        transition-all
        duration-200
      "
    >
      <!-- Lokasi Kerja -->
      <div class="">
        <label class="label" for="waktuKerja">
          <span class="label-text font-semibold">Lokasi Kerja</span>
        </label>
        <select id="waktuKerja" class="select select-primary w-full">
          <option disabled="disabled" selected="selected">
            Pilih Lokasi Kerja
          </option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </div>
    </li>
    <li
      id="notif"
      class="
        flex flex-row
        sm:px-5 sm:py-2
        xs:px-3 xs:py-2
        rounded-large
        dark:text-white dark:text-opacity-80
        transition-all
        duration-200
      "
    >
      <!-- Kisaran Gaji -->
      <div class="">
        <label class="label" for="waktuKerja">
          <span class="label-text font-semibold">Kisaran Gaji</span>
        </label>
        <select id="waktuKerja" class="select select-primary w-full">
          <option disabled="disabled" selected="selected">
            Pilih Kisaran Gaji
          </option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </div>
    </li>
    <div
      class="
        mt-2
        flex flex-row
        justify-between
        gap-4
        sm:px-5 sm:py-2
        xs:px-3 xs:py-2
        rounded-large
        dark:text-white dark:text-opacity-80
        transition-all
        duration-200
      "
    >
      <div class="w-40">
        <button class="btn btn-outline w-full" type="reset">Reset</button>
      </div>
      <div class="w-40">
        <button class="btn btn-primary">Filter</button>
      </div>
    </div>
  </ul>
</template>
