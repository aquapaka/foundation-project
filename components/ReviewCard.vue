<template>
  <div class="rounded-lg border border-gray-200 p-6">
    <div class="flex py-6">
      <img :src="avatarUrl" :alt="name">
      <div class="flex flex-col justify-center">
        <p class="text-lg font-semibold text-left">{{ name }}</p>
        <p class="inline-block px-4 py-1 rounded-lg bg-secondary bg-opacity-10 my-1 text-sm">{{ grade }}</p>
      </div>
    </div>
    <hr/>
    <p class="text-left font-semibold pt-6 pb-2">{{ review }}</p>
  </div>
</template>

<script setup lang="ts">
import {Review} from "~/constants/Reviews";

const props = defineProps<Review>();
</script>