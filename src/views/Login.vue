<template>
  <!-- container -->
  <div class="min-h-screen bg-gray-200 flex justify-center items-center">
    <!-- kotak -->
    <div
      class="bg-primary shadow-primary rounded-40 flex flex-row p-2"
      style="height: 600px; width: 1000px"
    >
      <!-- gambar -->
      <!-- <div class="position-absolute">
        <svg
          width="750"
          viewBox="0 0 792 495"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="599.294"
            cy="301.412"
            r="192.706"
            fill="white"
            fill-opacity="0.2"
          />
          <circle
            cx="157.412"
            cy="198.353"
            r="156.912"
            stroke="white"
            stroke-opacity="0.2"
          />
          <mask
            id="mask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="307"
            y="0"
            width="236"
            height="235"
          >
            <circle cx="424.941" cy="117.176" r="117.176" fill="#C4C4C4" />
          </mask>
          <g mask="url(#mask0)">
            <line
              x1="269.647"
              y1="24.9118"
              x2="578.824"
              y2="24.9118"
              stroke="white"
              stroke-opacity="0.2"
            />
            <line
              x1="269.647"
              y1="10.7942"
              x2="578.824"
              y2="10.7942"
              stroke="white"
              stroke-opacity="0.2"
            />
            <line
              x1="269.647"
              y1="39.0294"
              x2="578.824"
              y2="39.0294"
              stroke="white"
              stroke-opacity="0.2"
            />
            <line
              x1="269.647"
              y1="53.1471"
              x2="578.824"
              y2="53.1471"
              stroke="white"
              stroke-opacity="0.2"
            />
            <line
              x1="269.647"
              y1="67.2647"
              x2="578.824"
              y2="67.2647"
              stroke="white"
              stroke-opacity="0.2"
            />
            <line
              x1="269.647"
              y1="81.3824"
              x2="578.824"
              y2="81.3824"
              stroke="white"
              stroke-opacity="0.2"
            />
            <line
              x1="269.647"
              y1="95.5"
              x2="578.824"
              y2="95.5"
              stroke="white"
              stroke-opacity="0.2"
            />
            <line
              x1="269.647"
              y1="109.618"
              x2="578.824"
              y2="109.618"
              stroke="white"
              stroke-opacity="0.2"
            />
            <line
              x1="269.647"
              y1="123.735"
              x2="578.824"
              y2="123.735"
              stroke="white"
              stroke-opacity="0.2"
            />
            <line
              x1="269.647"
              y1="137.853"
              x2="578.824"
              y2="137.853"
              stroke="white"
              stroke-opacity="0.2"
            />
            <line
              x1="269.647"
              y1="151.971"
              x2="578.824"
              y2="151.971"
              stroke="white"
              stroke-opacity="0.2"
            />
            <line
              x1="269.647"
              y1="166.088"
              x2="578.824"
              y2="166.088"
              stroke="white"
              stroke-opacity="0.2"
            />
            <line
              x1="269.647"
              y1="180.206"
              x2="578.824"
              y2="180.206"
              stroke="white"
              stroke-opacity="0.2"
            />
            <line
              x1="269.647"
              y1="194.324"
              x2="578.824"
              y2="194.324"
              stroke="white"
              stroke-opacity="0.2"
            />
            <line
              x1="269.647"
              y1="208.441"
              x2="578.824"
              y2="208.441"
              stroke="white"
              stroke-opacity="0.2"
            />
            <line
              x1="269.647"
              y1="222.559"
              x2="578.824"
              y2="222.559"
              stroke="white"
              stroke-opacity="0.2"
            />
          </g>
        </svg>
      </div> -->
      <!-- bagian kiri -->
      <div
        class="
          bagianKiri
          text-white
          px-5
          flex flex-col
          justify-end
          items-center
          w-3/5
        "
      >
        <div class="slide m-5">
          <div class="w-full carousel text-center">
            <div id="item1" class="w-full pt-20 carousel-item">
              Cari kerja dengan mudah disini, karena terhubung dengan ratusan
              perusahaan yang tergabung.
            </div>
            <div id="item2" class="w-full pt-20 carousel-item">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              quidem dolorem.
            </div>
            <div id="item3" class="w-full pt-20 carousel-item">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
              illum quasi eaque, repudiandae quidem doloremque. Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet.
            </div>
          </div>
          <div class="flex justify-center w-full py-4 space-x-2">
            <a href="#item1" class="w-2 h-2 bg-white btn-circle"></a>
            <a href="#item2" class="w-2 h-2 bg-white btn-circle"></a>
            <a href="#item3" class="w-2 h-2 bg-white btn-circle"></a>
          </div>
        </div>
      </div>

      <!-- bagian kanan  -->
      <div
        class="
          bagiankanan
          bg-white
          rounded-40
          w-2/5
          p-8
          z-10
          shadow-bagianKanan
          transform
          overflow-y-auto
          hover:shadow-bagianKananHover
          transition-all
          duration-200
        "
      >
        <!-- Login -->
        <div id="login" class="flex flex-col">
          <!-- logo -->
          <div class="text-2xl font-bold text-neutral self-end">BursaKerja</div>

          <!-- login form -->
          <div class="formLogin">
            <p class="text-4xl font-bold text-neutral self-start pt-8">Login</p>
            <div class="form-control">
              <!-- username -->
              <label class="label mt-4">
                <span class="label-text font-semibold">Username</span>
              </label>
              <input
                type="text"
                placeholder="Masukan username"
                class="
                  input input-primary
                  border-0
                  bg-gray-100
                  h-12
                  rounded-large
                  focus:ring-2 focus:ring-primary-focus
                "
              />

              <!-- password -->
              <label class="label mt-3">
                <span class="label-text font-semibold">Password</span>
                <a href="#" class="label-text-alt">Lupa password?</a>
              </label>
              <input
                type="text"
                placeholder="Masukan password"
                class="
                  input input-primary
                  border-0
                  bg-gray-100
                  h-12
                  rounded-large
                  focus:ring-2 focus:ring-primary-focus
                "
              />

              <!-- btn login -->
              <button
                class="
                  btn btn-primary
                  my-6
                  h-12
                  rounded-large
                  shadow-lg
                  hover:shadow-xl
                  transition-all
                  duration-200
                "
              >
                Login
              </button>
            </div>

            <!-- login google -->
            <div class="flex flex-col justify-center items-center">
              <span class="mb-6 text-xs"> atau login dengan </span>
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

              <!-- daftar -->
              <span class="font-bold my-6 text-sm">
                <a class="btnDaftar" href="#"> Daftar Sekarang > </a>
              </span>
            </div>
          </div>
        </div>

        <!-- Daftar -->
        <!-- <div id="daftar" class="fs-4 d-flex flex-column">
          <div class="d-flex justify-content-between">
            icon kembali
            <div class="align-self-start">
                icon
                <iconify-icon icon="ltc" :inline="true" />!
            </div>
            logo
            <div class="fs-4 fw-bold align-self-end">
              Logotype
            </div>
          </div>

          login form
          <div class="formLogin">
            <p class="fs-2 fw-bold align-self-start pt-4">
              Daftar 
            </p>
            <form class="my-4">
              <div class="mb-2">
                <label for="emailDaftar" class="form-label fw-bold">Email</label>
                <input type="email" class="form-control" id="emailDaftar" placeholder="Masukan email...">
              </div>
              <div class="mb-2">
                <label for="usernameDaftar" class="form-label fw-bold">Username</label>
                <input type="username" class="form-control" id="usernameDaftar" placeholder="Masukan username...">
              </div>
              <div class="mb-2">
                <label for="passwordDaftar" class="form-label fw-bold">Password</label>
                <input type="password" class="form-control" id="passwordDaftar" placeholder="Masukan password...">
              </div>
              <div class="mb-4">
                <label for="passwordDaftarConfirm" class="form-label fw-bold">Konfirmasi Password</label>
                <input type="password" class="form-control" id="passwordDaftarConfirm" placeholder="Masukan password kembali...">
              </div>
              <button type="submit" class="submit btn btn-primary w-100 fw-bold">Daftar</button>
            </form>

            daftar google
            <div class="d-flex flex-wrap flex-column text-center justify-content-center align-items-center" >
              <span class="mb-4" style="font-size:12px">
                atau daftar dengan
              </span>
              <a href="http://google.com">
                <div class="btnGoogle bg-white rounded-circle d-flex justify-content-center align-items-center">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 512 512" xml:space="preserve" height="30px" >
                  <path style="fill:#FBBB00;" d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
                    c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
                    C103.821,274.792,107.225,292.797,113.47,309.408z"/>
                  <path style="fill:#518EF8;" d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
                    c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
                    c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"/>
                  <path style="fill:#28B446;" d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
                    c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
                    c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"/>
                  <path style="fill:#F14336;" d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
                    c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
                    C318.115,0,375.068,22.126,419.404,58.936z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
* {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
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

/* #daftar {
  display: none;
}

.container-fluid {
    background-color: #EEEEEE;
} */

/* .container-fluid .kotak {
  background-color: #3a3379;
  width: 1000px;
  height: 580px;
  border-radius: 40px;
  box-shadow: 0px 16px 40px rgba(58, 51, 121, 0.5);
} */
/*


.container-fluid .bagianKiri {
  border-radius: 35px; 
  width: 60%;
}

.container-fluid .bagianKanan {
  border-radius: 35px; 
  width: 40%; 
  z-index:99;
  overflow-y:auto; 
  -ms-overflow-style: none;  
  scrollbar-width: none;  
  box-shadow: -16px 0px 40px rgba(0, 0, 0, 0.2); 
  -webkit-transition: 1s ease-out;
  -moz-transition: 1s ease-out;
  -o-transition: 1s ease-out;
  transition: 1s ease-out;
}

.container-fluid .bagianKanan::-webkit-scrollbar {
  display:none; 
}

.container-fluid .bagianKanan:hover {
  box-shadow: -16px 0px 40px rgba(0, 0, 0, 0.3); 
}

.formLogin input {
  background: #EEEEEE; 
  height: 50px; 
  border-radius: 20px; 
  font-size: 12px; 
  border:none;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

.formLogin label {
  font-size: 12px;
}

.formLogin .lupaPass {
  font-size:12px; 
  text-decoration:none; 
  color: #3A3379;
  margin-top: 2px;
  display: inline-block;
}

.formLogin .lupaPass::after {
  content: '';
  width: 0px;
  height: 1px;
  display: block;
  background: #3A3379;
  transition: 300ms;
}

.formLogin .lupaPass:hover::after {
  width: 100%;
}

.formLogin .submit {
  background: #3A3379; 
  height: 50px; 
  border-radius: 20px; 
  font-size: 16px; 
  border:none; 
  box-shadow: 0px 16px 40px rgba(58, 51, 121, 0.2);
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

.formLogin .submit:hover {
  background: #2b2268; 
  box-shadow: 0px 16px 40px rgba(58, 51, 121, 0.4);
}

.formLogin .btnGoogle {
  height:40px; 
  width:40px; 
  box-shadow: 0px 5px 25px rgba(58, 51, 121, 0.2);
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

.formLogin .btnGoogle:hover {
  box-shadow: 0px 5px 25px rgba(58, 51, 121, 0.4);
}

.formLogin .btnDaftar {
  font-size:14px; 
  color: #3A3379;
  text-decoration:none; 
}

.formLogin .btnDaftar::after {
  content: '';
  width: 0px;
  height: 2px;
  display: block;
  background: #3A3379;
  transition: 300ms;
}

.formLogin .btnDaftar:hover::after {
  width: 100%;
}

#textSlider .carousel-indicators {
  position: relative;
}

#textSlider .carousel-indicators [data-bs-target] {
  width:8px;
  height: 8px;
  border-radius: 100%;
}


@media only screen and (min-width: 1399px) {

} */
</style>
