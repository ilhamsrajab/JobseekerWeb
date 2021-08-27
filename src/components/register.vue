<template>
  <!-- container -->
  <div class="container-fluid min-vh-100 d-flex flex-column justify-content-center p-5">
    <div class="fs-4 fw-bold align-self-end mb-3">
      Logotype
    </div>
    <div class="bg d-flex flex-column align-self-center" style="width:1000px;">
      <!-- kotak header -->
      <div class="text-white head p-5 align-self-center" style="background:#3a3379; border-radius:40px; width:100%;">
      <!-- gambar -->
      <div class="position-absolute" style="top:50px; right:400px">
        <svg width="700" viewBox="0 0 792 495" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="599.294" cy="301.412" r="192.706" fill="white" fill-opacity="0.2"/>
          <circle cx="157.412" cy="198.353" r="156.912" stroke="white" stroke-opacity="0.2"/>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="307" y="0" width="236" height="235">
          <circle cx="424.941" cy="117.176" r="117.176" fill="#C4C4C4"/>
        </mask>
        <g mask="url(#mask0)">
          <line x1="269.647" y1="24.9118" x2="578.824" y2="24.9118" stroke="white" stroke-opacity="0.2"/>
          <line x1="269.647" y1="10.7942" x2="578.824" y2="10.7942" stroke="white" stroke-opacity="0.2"/>
          <line x1="269.647" y1="39.0294" x2="578.824" y2="39.0294" stroke="white" stroke-opacity="0.2"/>
          <line x1="269.647" y1="53.1471" x2="578.824" y2="53.1471" stroke="white" stroke-opacity="0.2"/>
          <line x1="269.647" y1="67.2647" x2="578.824" y2="67.2647" stroke="white" stroke-opacity="0.2"/>
          <line x1="269.647" y1="81.3824" x2="578.824" y2="81.3824" stroke="white" stroke-opacity="0.2"/>
          <line x1="269.647" y1="95.5" x2="578.824" y2="95.5" stroke="white" stroke-opacity="0.2"/>
          <line x1="269.647" y1="109.618" x2="578.824" y2="109.618" stroke="white" stroke-opacity="0.2"/>
          <line x1="269.647" y1="123.735" x2="578.824" y2="123.735" stroke="white" stroke-opacity="0.2"/>
          <line x1="269.647" y1="137.853" x2="578.824" y2="137.853" stroke="white" stroke-opacity="0.2"/>
          <line x1="269.647" y1="151.971" x2="578.824" y2="151.971" stroke="white" stroke-opacity="0.2"/>
          <line x1="269.647" y1="166.088" x2="578.824" y2="166.088" stroke="white" stroke-opacity="0.2"/>
          <line x1="269.647" y1="180.206" x2="578.824" y2="180.206" stroke="white" stroke-opacity="0.2"/>
          <line x1="269.647" y1="194.324" x2="578.824" y2="194.324" stroke="white" stroke-opacity="0.2"/>
          <line x1="269.647" y1="208.441" x2="578.824" y2="208.441" stroke="white" stroke-opacity="0.2"/>
          <line x1="269.647" y1="222.559" x2="578.824" y2="222.559" stroke="white" stroke-opacity="0.2"/>
        </g>
        </svg>
      </div>
        <div class="fs-1 fw-bold mb-5 text-center">Lengkapi Data Diri</div>
        <ul class="steps">
          <li class="active step step-neutral">Data Diri</li>
          <li class="step step-neutral">Media Sosial</li>
          <li class="step step-neutral">Berkas</li>
          <li class="step step-neutral">Riwayat Pekerjaan</li>
          <li class="step step-neutral">Selesai</li>
        </ul>
      </div>

      <!-- form -->
      <div class="formDaftar mx-auto mt-4" style="width:800px">
        <form class="my-4">
          <!-- nama lengkap -->
          <div class="mb-2">
            <label for="namaLengkap" class="form-label fw-bold">Nama Lengkap</label>
            <input
              type="text"
              class="form-control"
              id="namaLengkap"
              placeholder="Masukan nama lengkap..."
            />
          </div>
          <!-- nik -->
          <div class="mb-2">
            <label for="nik" class="form-label fw-bold"
              >NIK</label
            >
            <input
              type="number"
              class="form-control"
              id="nik"
              placeholder="Masukan nomor induk kependudukan..."
            />
          </div>
          <!-- jenis kelamin -->
          <div class="mb-2">
            <label class="form-label fw-bold">Jenis Kelamin</label>
            <div class="jenisKelamin d-flex align-items-center bg-danger">
              <input class="form-check-input form-check-inline" type="radio" name="jenisKelamin" id="laki-laki">
              <label class="form-check-label" for="laki-laki">
                Laki-Laki
              </label>
            </div>
          <div class="jenisKelamin d-flex align-items-center bg-info">
            <input class="form-check-input form-check-inline" type="radio" name="jenisKelamin" id="perempuan">
            <label class="form-check-label" for="perempuan">
              Perempuan
            </label>
          </div>
          </div>
          <div class="mb-4">
            <label for="passwordDaftarConfirm" class="form-label fw-bold"
              >Konfirmasi Password</label
            >
            <input
              type="password"
              class="form-control"
              id="passwordDaftarConfirm"
              placeholder="Masukan password kembali..."
            />
          </div>
          <button type="submit" class="submit btn btn-primary w-100 fw-bold">
            Daftar
          </button>
        </form>

        <!-- daftar google -->
        <div
          class="
            d-flex
            flex-wrap flex-column
            text-center
            justify-content-center
            align-items-center
          "
        >
          <span class="mb-4" style="font-size: 12px"> atau daftar dengan </span>
          <a href="http://google.com">
            <div
              class="
                btnGoogle
                bg-white
                rounded-circle
                d-flex
                justify-content-center
                align-items-center
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
      </div>

    </div>

  </div>
</template>

<script></script>

<style scoped>
* {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.container-fluid {
  /* background-color: #eeeeee; */
  /* background-image: url('assets/'); */
}

.formDaftar input {
  background: #eeeeee;
  height: 50px;
  border-radius: 20px;
  font-size: 12px;
  border: none;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

.formDaftar .jenisKelamin input {
  background: #eeeeee;
  height: 18px;
  width: 18px;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

.formDaftar .jenisKelamin input:hover {
  background: #d6d6d6;
}

.formDaftar label {
  font-size: 12px;
}

.formDaftar .submit {
  background: #3a3379;
  height: 50px;
  border-radius: 20px;
  font-size: 16px;
  border: none;
  box-shadow: 0px 16px 40px rgba(58, 51, 121, 0.2);
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

.formDaftar .submit:hover {
  background: #2b2268;
  box-shadow: 0px 16px 40px rgba(58, 51, 121, 0.4);
}

</style>
