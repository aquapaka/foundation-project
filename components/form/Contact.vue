<template>
  <div class="rounded-lg shadow-lg px-4 py-8 md:ml-16">
    <p class="text-center my-4">Hurry Up! The slots are filling fast</p>
    <!--  Name field  -->
    <div>
      <label>Enter your name</label>
      <input type="text" placeholder="your name..."/>
    </div>
    <!--  Phone number field  -->
    <div>
      <label>Enter your phone number</label>
      <input type="tel" placeholder="..."/>
    </div>
    <!--  Select branch field  -->
    <div>
      <label>Select nearest branch</label>
      <select>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>
    <!--  Select grade/class field  -->
    <div>
      <label>Select grade/class</label>
      <select>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>
    <button class="primary-button w-full mt-4">Try a free class</button>
    <p class="text-center text-xs my-3">1000+ slots booked in last 24 hours</p>
    <p class="text-xs">By signing up, you agree to the Terms of Service and Privacy Policy. You also agree that you have parental consent. Important updates will be sent via WhatsApp.</p>
  </div>

</template>
<script setup>
</script>