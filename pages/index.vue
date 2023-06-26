<template>
  <!-- Brand image -->
  <img class="w-40 absolute top-6 left-16" src="/img/brand-image.svg" alt="brand">

  <!-- Main section -->
  <section class="container mx-auto grid grid-cols-1 md:grid-cols-2 pt-20">
    <div>
      <h1 class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mt-12">Best online coding classes for kids</h1>
      <p class="inline-block px-4 py-1 rounded-lg bg-secondary bg-opacity-10 mt-6">Coding courses for <span class="font-semibold">Grade 1-12</span></p>
      <div class="grid grid-cols-4 gap-2 mt-10 pl-2">
        <div>
          <p class="text-primary text-xl font-bold">350,000+</p>
          <p class="text-sm"><span class="underline decoration-primary underline-offset-8">Stu</span>dents</p>
        </div>
        <div>
          <p class="text-primary text-xl font-bold">30+</p>
          <p class="text-sm"><span class="underline decoration-primary underline-offset-8">Cou</span>ntries</p>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-2 mt-10">
        <div class="border rounded p-3">
          <p class="text-primary text-xl font-bold">4.9</p>
          <p class="text-sm">Average student & parent rating</p>
        </div>
        <div class="border rounded p-3">
          <p class="text-primary text-xl font-bold">4.8</p>
          <p class="text-sm">Curriculum rating</p>
        </div>
      </div>
    </div>
    <FormContact/>
  </section>

  <!-- Partnership Section -->
  <SectionPartnership/>

  <!-- Learn Section -->
  <section class="mx-auto text-center py-28 relative">
    <h2>Learn to code <span class="underline decoration-primary">and get certificates</span></h2>
    <p>Get certificates from prestigious global institutions and proudly show the world that you can code</p>
    <img class="absolute mx-auto inset-0 top-56 w-[500px]" src="/img/american-students.webp" alt="american students"/>
    <img class="w-full h-[500px] py-16" src="/img/bg-stripes.webp" alt="stripes"/>
    <button class="primary-button">Try a free class</button>
  </section>

  <!-- Reviews Section -->
  <SectionReview/>

  <!-- Why choose Section -->
  <SectionWhyChoose/>
</template>