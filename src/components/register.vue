<template>
  <!-- container -->
  <div
    class="
      container-fluid
      min-vh-100
      d-flex
      flex-column
      justify-content-center
      p-3
    "
  >
    <div class="fs-4 fw-bold align-self-end mb-3">Logotype</div>
    <div class="bg d-flex flex-column align-self-center" style="width: 1000px">
      <!-- kotak header -->
      <div
        class="kotak text-white head p-5 align-self-center"
        style=""
      >
        <!-- gambar -->
        <div class="position-absolute">
          <svg
            width="900"
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
        </div>
        <div class="fs-1 fw-bold mb-5 text-center">Lengkapi Data Diri</div>
        <ul class="steps">
          <li class="active">Data Diri</li>
          <li>Media Sosial</li>
          <li>Berkas</li>
          <li>Riwayat Pekerjaan</li>
          <li>Selesai</li>
        </ul>
      </div>

      <!-- form -->
      <div class="formDaftar mx-auto mt-4" style="width: 800px">
        <form class="my-4">
          <!-- nama lengkap -->
          <div class="mb-3">
            <label for="namaLengkap" class="form-label fw-bold"
              >Nama Lengkap</label
            >
            <input
              type="text"
              class="form-control"
              id="namaLengkap"
              placeholder="Masukan nama lengkap..."
            />
          </div>
          <!-- nik -->
          <div class="mb-3">
            <label for="nik" class="form-label fw-bold">NIK</label>
            <input
              type="number"
              class="form-control"
              id="nik"
              maxlength="16"
              max="9999999999999999"
              placeholder="Masukan nomor induk kependudukan..."
            />
          </div>
          <!-- jenis kelamin -->
          <div class="mb-3">
            <label class="form-label fw-bold">Jenis Kelamin</label>
            <div class="row g-2">
              <div class="jenisKelamin col-md-2 align-items-center">
                <input
                  class="form-check-input form-check-inline"
                  type="radio"
                  name="jenisKelamin"
                  id="laki-laki"
                />
                <label class="form-check-label" for="laki-laki"
                  >Laki-Laki</label
                >
                <span class="checkmark"></span>
              </div>
              <div class="jenisKelamin col-md-2 align-items-center">
                <input
                  class="form-check-input form-check-inline"
                  type="radio"
                  name="jenisKelamin"
                  id="perempuan"
                />
                <label class="form-check-label" for="perempuan"
                  >Perempuan</label
                >
                <span class="checkmark"></span>
              </div>
            </div>
          </div>
          <!-- tempat tanggal lahir -->
          <div class="mb-3">
            <label for="tempatLahir" class="form-label fw-bold"
              >Tempat Tanggal Lahir</label
            >
            <div class="d-flex flex-row">
              <input
                type="text"
                class="form-control"
                id="tempatLahir"
                placeholder="Masukan tempat lahir.."
                style="margin-right: 10px; width: 70%"
              />
              <input
                type="date"
                class="form-control"
                id="tanggalLahir"
                placeholder="hh/mm/yyyy.."
                style="width: 30%"
              />
            </div>
          </div>

          <!-- agama -->
          <div class="mb-3">
            <label for="agama" class="form-label fw-bold">Agama</label>
            <select id="agama" class="form-select" aria-label="Pilih agama">
              <option selected>Pilih agama</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <!-- status perkawinan -->
          <div class="mb-3">
            <label for="statusPerkawinan" class="form-label fw-bold"
              >Status Perkawinan</label
            >
            <select
              id="statusPerkawinan"
              class="form-select"
              aria-label="Pilih status"
            >
              <option selected>Pilih status</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <!-- alamat -->
          <div class="mb-3">
            <label class="form-label fw-bold">Alamat</label><br />
            <!-- provinsi -->
            <div class="mb-2">
              <label for="alamatProvinsi" class="form-label">Provinsi</label>
              <select
                id="alamatProvinsi"
                class="form-select"
                aria-label="Pilih provinsi"
              >
                <option selected>Pilih provinsi</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <!-- kota/kabupaten -->
            <div class="mb-2">
              <label for="alamatKabupaten" class="form-label"
                >Kota/Kabupaten</label
              >
              <select
                id="alamatKabupaten"
                class="form-select"
                aria-label="Pilih kota/kabupaten"
              >
                <option selected>Pilih kota/kabupaten</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <!-- Kecamatan -->
            <div class="mb-2">
              <label for="alamatKecamatan" class="form-label">Kecamatan</label>
              <select
                id="alamatKecamatan"
                class="form-select"
                aria-label="Pilih kecamatan"
              >
                <option selected>Pilih kecamatan</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <!-- desa/kelurahan -->
            <div class="mb-2">
              <label for="alamatDesa" class="form-label">Desa/Kelurahan</label>
              <select
                id="alamatDesa"
                class="form-select"
                aria-label="Pilih desa/kelurahan"
              >
                <option selected>Pilih desa/kelurahan</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <!-- rt/rw -->
            <div class="mb-2">
              <label for="RT" class="form-label">RT/RW</label>
              <div class="d-flex flex-row">
                <input
                  type="number"
                  class="form-control"
                  id="RT"
                  maxlength="3"
                  placeholder="Masukan no. RT.."
                  style="margin-right: 10px"
                />
                <input
                  type="number"
                  class="form-control"
                  id="RW"
                  maxlength="3"
                  placeholder="Masukan no. RW.."
                />
              </div>
            </div>
            <!-- alamat rumah -->
            <div class="mb-2">
              <label for="alamatRumah" class="form-label">Alamat Rumah</label>
              <textarea
                class="form-control w-100"
                name="alamatRumah"
                id="alamatRumah"
                placeholder="Tuliskan Alamat Rumah/Jalan/Gang/Perumahan"
                style="height: 100px; padding: 12px"
              ></textarea>
            </div>

            <!-- kodepos -->
            <div class="mb-2">
              <label for="kodepos" class="form-label">Kodepos</label>
              <input
                type="number"
                class="form-control"
                id="kodepos"
                maxlength="5"
                placeholder="Masukan kode pos.."
                disabled
              />
            </div>
          </div>

          <!-- pendidikan terakhir -->
          <div class="mb-3">
            <label for="pendidikanTerakhir" class="form-label fw-bold"
              >Pendidikan Terakhir</label
            >
            <select
              id="pendidikanTerakhir"
              class="form-select"
              aria-label="Pilih pendidikan terakhir"
            >
              <option selected>Pilih pendidikan terakhir</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <!-- no hp -->
          <div class="mb-3">
            <label for="noHP" class="form-label fw-bold">No. HP</label>
            <input
              type="text"
              class="form-control"
              id="nik"
              maxlength="13"
              placeholder="Masukan nomor hp..."
            />
          </div>

          <!-- foto pribadi -->
          <div class="mb-3">
            <label for="fotoPribadi" class="form-label fw-bold"
              >Foto Pribadi Formal</label
            >
            <input
              class="form-control"
              type="file"
              accept="image/*"
              id="fotoPribadi"
            />
          </div>

          <!-- foto ktp -->
          <div class="mb-5">
            <label for="fotoKTP" class="form-label fw-bold">Foto E-KTP</label>
            <input
              class="form-control"
              dir="rtl"
              type="file"
              accept="image/*"
              id="fotoKTP"
            />
          </div>

          <!-- persetujuan -->
          <div class="mb-4 d-flex">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="persetujuan"
              style="margin-right:10px"
            />
            <label class="form-check-label" for="persetujuan">
              Saya menyatakan bahwa data di atas adalah benar data pribadi saya, jika ada kesalahan saya siap menganggung semua akibatnya.
            </label>
          </div>

          <button type="submit" class="submit btn btn-primary w-100 fw-bold mb-5">
            Selanjutnya
          </button>
        </form>
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

/* kotak */

.kotak {
  background: #3a3379; 
  border-radius: 40px; 
  width: 100%; 
  z-index:1;
}

/* steps */
.steps {
}

.steps li {
  list-style-type: none;
  float: left;
  width: 20%;
  position: relative;
  text-align: center;
}

.steps li::before {
  content: '';
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 100%;
  display: block;
  text-align: center;
  margin: 0 auto 10px auto;
  z-index: 2;
}

.steps li::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: #fff;
  top: 9px;
  left: -50%;
  z-index: -1;
}

.steps li:first-child::after {
  content: none;
}

.steps li.active::before {
  background-color: #FFBEB2;
  z-index: 2;
}

.formDaftar input,
.formDaftar select,
.formDaftar textarea {
  background: #eeeeee;
  height: 50px;
  border-radius: 16px;
  font-size: 12px;
  border: none;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

.formDaftar #persetujuan {
  background: #eeeeee;
  height: 18px;
  width: 18px;
  border-radius: 30%;
}

.formDaftar #persetujuan:checked {
  background: #3a3379;
}

.formDaftar .jenisKelamin input {
  background: #eeeeee;
  height: 18px;
  width: 18px;
}

.formDaftar .jenisKelamin input:checked {
  background: #3a3379;
}

.formDaftar .jenisKelamin .checkmark:after {
  content: "";
  position: absolute;
  display: none;
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: black;
}

/* Show the indicator (dot/circle) when checked */
.formDaftar .jenisKelamin input:checked ~ .checkmark:after {
  display: block;
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
