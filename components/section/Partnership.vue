<template>
  <section class="container mx-auto grid grid-cols-3 gap-8 mt-20">
    <div class="grid grid-cols-2 justify-center shadow-lg rounded-lg p-4">
      <p class="text-neutral text-center col-span-2 font-semibold py-2">Built by alumni of</p>
      <img class="mx-auto py-4" v-for="partnerShip in partnerShips" :src="partnerShip.imageUrl" :alt="partnerShip.name">
    </div>
    <div class="grid grid-cols-2 justify-center shadow-lg rounded-lg p-4">
      <p class="text-neutral text-center col-span-2 font-semibold py-2">In partnership with</p>
      <img class="mx-auto py-4" v-for="partnerShip in partnerShips" :src="partnerShip.imageUrl" :alt="partnerShip.name">
    </div>
    <div class="grid grid-cols-2 justify-center shadow-lg rounded-lg p-4">
      <p class="text-neutral text-center col-span-2 font-semibold py-2">Accredited by STEM.org</p>
      <img class="mx-auto py-4" v-for="partnerShip in partnerShips" :src="partnerShip.imageUrl" :alt="partnerShip.name">
    </div>
  </section>
</template>

<script setup lang="ts">
import Partnerships from "~/constants/Partnerships";

const partnerShips = Partnerships;
</script>