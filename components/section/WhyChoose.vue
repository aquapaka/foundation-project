<template>
  <section class="container mx-auto py-24 text-center">
    <h2>Why choose <span class="underline decoration-primary">Codingal</span></h2>
    <div class="flex flex-col md:flex-row gap-16 my-20 items-baseline">
      <div v-for="whychoose in whychooses">
        <img class="mx-auto" :src="whychoose.imageUrl" :alt="whychoose.firstLine">
        <h3 class="font-semibold mt-6">{{ whychoose.firstLine }}</h3>
        <h3 class="font-semibold text-primary">{{ whychoose.secondLine }}</h3>
        <p class="mt-4">{{ whychoose.description }}</p>
      </div>
    </div>
    <button class="primary-button">Try a free class</button>
  </section>
</template>

<script setup lang="ts">
import WhyChoose from "~/constants/WhyChoose";

const whychooses = WhyChoose;
</script>