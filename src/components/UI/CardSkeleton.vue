<template>
  <!-- card -->
  <div
    class="
      flex flex-col
      place-content-between
      group
      bg-white
      dark:bg-gray-900
      rounded-large
      cursor-default
      p-5
      animate-pulse
    "
  >
    <div>
      <div class="flex justify-between">
        <div class="flex flex-row items-start">
          <div
            class="
              w-20
              h-20
              object-cover
              rounded-large
              bg-gray-200
              dark:bg-gray-800
              mr-4
            "
          ></div>
          <div>
            <div class="flex flex-wrap flex-col">
              <div
                class="
                  flex-auto
                  bg-gray-200
                  dark:bg-gray-800
                  animate-pulse
                  h-6
                  rounded-lg
                  w-32
                  lg:w-56
                "
              ></div>

              <div
                class="
                  flex-none
                  mt-2
                  bg-gray-200
                  dark:bg-gray-800
                  animate-pulse
                  h-5
                  rounded-lg
                  w-40
                "
              ></div>
            </div>
          </div>
        </div>

        <!-- button bookmark -->
        <div
          class="rounded-lg bg-gray-200 dark:bg-gray-800 h-8 w-8 animate-pulse"
        ></div>
      </div>

      <!-- text -->
      <div class="mt-6">
        <div class="flex flex-row items-center">
          <div class="flex-auto">
            <div
              class="
                bg-gray-200
                dark:bg-gray-800
                animate-pulse
                h-5
                rounded-lg
                w-48
              "
            ></div>
            <div
              class="
                mt-1
                bg-gray-200
                dark:bg-gray-800
                animate-pulse
                h-5
                rounded-lg
                w-56
              "
            ></div>
          </div>
          <div
            class="
              w-20
              bg-gray-200
              dark:bg-gray-800
              animate-pulse
              h-8
              rounded-large
            "
          ></div>
        </div>

        <div
          class="
            mt-4
            bg-gray-200
            dark:bg-gray-800
            animate-pulse
            h-4
            rounded-large
          "
        ></div>
        <div
          class="
            mt-1.5
            bg-gray-200
            dark:bg-gray-800
            animate-pulse
            h-4
            rounded-large
          "
        ></div>
        <div
          class="
            mt-1.5
            bg-gray-200
            dark:bg-gray-800
            animate-pulse
            h-4
            rounded-large
          "
        ></div>
        <div
          class="
            mt-1.5
            bg-gray-200
            dark:bg-gray-800
            animate-pulse
            h-4
            rounded-large
          "
        ></div>
      </div>
    </div>

    <div class="flex flex-row justify-between items-center mt-6 text-gray-500">
      <span
        class="
          bg-gray-200
          dark:bg-gray-800
          animate-pulse
          h-5
          w-20
          lg:w-28
          rounded-large
        "
      >
      </span>

      <span
        class="
          bg-gray-200
          dark:bg-gray-800
          animate-pulse
          h-5
          w-20
          lg:w-28
          rounded-large
        "
      >
      </span>
    </div>
  </div>
</template>
