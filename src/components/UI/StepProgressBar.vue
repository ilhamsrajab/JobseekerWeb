<template>
  <ul class="w-full steps my-5">
    <li data-content="" class="step step-accent text-sm">Data Diri</li>
    <li data-content="" class="step text-sm">Media Sosial</li>
    <li data-content="" class="step text-sm">Berkas</li>
    <li data-content="" class="step text-sm">Riwayat Pekerjaan</li>
    <li data-content="" class="step text-sm">Selesai</li>
  </ul>
</template>

<style scoped>
.steps .step::before {
  height: 0.375rem;
  background: white;
}
.steps .step::after {
  background: white;
  width: 1.25rem;
  height: 1.25rem;
}

.steps .step.step-accent::after {
  background: #ffbeb2;
}
</style>
