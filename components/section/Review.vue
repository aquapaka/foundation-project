<template>
  <section class="container mx-auto text-center mt-12">
    <h2>Students and parents <span class="underline decoration-primary">love Codingal</span></h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:px-8 xl:px-24 py-12">
      <ReviewCard v-for="review in reviews"
                  :avatar-url="review.avatarUrl"
                  :name="review.name"
                  :grade="review.grade"
                  :star="review.star"
                  :review="review.review"/>
    </div>
    <div class="flex gap-6 justify-center">
      <button class="primary-button-outlined">See more reviews</button>
      <button class="primary-button">Try a free class</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import Reviews from "~/constants/Reviews";
const reviews = Reviews;
</script>