<template>
  <div class="hero sm:my-8 xs:my-4">
    <!-- container -->
    <div class="sm:mx-8 xs:mx-4">
      <!-- hero wrapper -->
      <div
        class="
          hero-wrapper
          grid grid-cols-1
          md:grid-cols-12
          xl:gap-8
          md:gap-8
          items-center
          bg-gradient-to-br
          from-blue-200
          to-blue-300
          sm:px-10 sm:py-5
          xs:px-6 xs:py-6
          xl:px-20
          rounded-40
        "
      >
        <!-- hero text -->
        <div
          class="hero-text col-span-6 lg:ml-10 xs:ml-0 xs:order-2 md:order-1"
        >
          <h1
            class="
              font-bold
              lg:text-5xl
              md:text-4xl
              sm:text-3xl
              xs:text-2xl
              md:mt-12
              sm:mt-0
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
              bg-primary bg-opacity-80
              rounded-full
              mt-10
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
              shadow-lg
              sm:px-10 sm:py-4
              xs:px-5 xs:py-2
              rounded-20
              hover:shadow-xl hover:-translate-y-1
              flex
              items-center
              space-x-4q
              md:text-5xl
              sm:mb-12
              xs:mx-auto
              md:mx-0
              transform
              transition-all
              duration-200
            "
          >
            <div class="image">
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
            <div class="text">
              <p class="text-xs text-gray-600">Download it from</p>
              <p class="text-base font-semibold text-gray-900">Google Play</p>
            </div>
          </button>
        </div>

        <!-- hero image -->
        <div class="hero-image col-span-6 xs:order-1 md:order-2">
          <img
            src="../../assets/images/heroimage.png"
            alt="hero_image"
            class="
              md:mb-5
              sm:mb-0
              animate-bounce5
              transform
              rotate-180
              mx-auto
              sm:w-96
              md:w-full
            "
            draggable="false"
          />
        </div>
      </div>
    </div>
  </div>
</template>
