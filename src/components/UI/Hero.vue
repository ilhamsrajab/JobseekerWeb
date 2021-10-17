<template>
  <!-- container -->
  <div class="2xl:m-12 xl:m-10 lg:m-8 sm:m-6 xs:m-4">
    <!-- hero wrapper -->
    <div
      class="
        grid grid-cols-1
        bg-gradient-to-br
        from-blue-200
        to-blue-300
        xl:px-20 xl:gap-8
        md:grid-cols-12 md:gap-8 md:rounded-40
        items-center
        sm:px-10 sm:py-5
        xs:px-6 xs:py-6 xs:rounded-20
      "
    >
      <!-- hero text -->
      <div class="hero-text col-span-6 lg:ml-10 xs:ml-0 xs:order-2 md:order-1">
        <h1
          class="
            font-bold
            lg:text-5xl
            md:text-4xl md:mt-12
            sm:text-3xl sm:mt-0
            xs:text-2xl
            max-w-xl
            text-neutral
            leading-14
          "
        >
          Cari kerja dengan mudah disini.
        </h1>
        <div
          class="
            xl:w-56
            lg:w-44
            xs:w-32
            h-1.5
            mt-10
            bg-primary bg-opacity-80
            rounded-full
          "
        ></div>
        <p class="text-base leading-relaxed mt-10 font-semibold">
          Terhubung dengan berbagai jenis pekerjaan.
        </p>

        <!-- playstore -->
        <button
          class="
            mt-10
            bg-white
            dark:bg-gray-800
            shadow-lg
            rounded-20
            hover:shadow-xl hover:-translate-y-1
            flex
            items-center
            md:text-5xl md:mx-0
            sm:px-10 sm:py-4 sm:mb-12
            xs:px-5 xs:py-2 xs:mx-auto
            transform
            transition-all
            duration-200
          "
        >
          <!-- logo playstore -->
          <div class="image mr-6">
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              width="436.057"
              height="469.847"
              viewBox="0 0 436.057 469.847"
            >
              <g transform="translate(-16.896)">
                <path
                  d="M270.336,234.965,34.39,462.165A40.146,40.146,0,0,1,16.9,428.672V41.258A40.146,40.146,0,0,1,34.39,7.765Z"
                  fill="#2196f3"
                />
                <path
                  d="M352.9,155.6l-82.56,79.36L34.39,7.765a31.446,31.446,0,0,1,2.773-1.92A40.363,40.363,0,0,1,77.91,5.2Z"
                  fill="#4caf50"
                />
                <path
                  d="M452.95,234.965a40.791,40.791,0,0,1-21.333,36.267L352.9,314.325l-82.56-79.36L352.9,155.6l78.72,43.093A40.791,40.791,0,0,1,452.95,234.965Z"
                  fill="#ffc107"
                />
                <path
                  d="M352.9,314.325,77.91,464.725a40.9,40.9,0,0,1-40.747-.64,31.44,31.44,0,0,1-2.773-1.92l235.947-227.2Z"
                  fill="#f44336"
                />
              </g>
            </svg>
          </div>
          <!-- end of logo playstore -->

          <!-- text download -->
          <div class="text">
            <p
              class="text-xs text-gray-600 dark:text-white dark:text-opacity-60"
            >
              Download it from
            </p>
            <p
              class="
                text-base
                font-semibold
                text-gray-900
                dark:text-white dark:text-opacity-80
              "
            >
              Google Play
            </p>
          </div>
          <!-- end of text download -->
        </button>
        <!-- end of playstore -->
      </div>

      <!-- hero image -->
      <div class="hero-image col-span-6 xs:order-1 md:order-2">
        <img
          src="../../assets/images/heroimage.png"
          alt="hero_image"
          class="
            md:mb-5 md:w-full
            sm:mb-0 sm:w-96
            mx-auto
            animate-bounce5
            transform
            rotate-180
          "
          draggable="false"
        />
      </div>
      <!-- end of hero image -->
    </div>
  </div>
</template>
