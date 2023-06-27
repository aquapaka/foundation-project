<template>
  <div class="rounded-lg shadow-lg px-4 py-8 md:ml-16">
    <p class="text-center my-4">Hurry Up! The slots are filling fast</p>
    <!--  Name field  -->
    <div>
      <label>Enter your name</label>
      <span v-if="formError.nameError" class="font-light text-xs text-red-500"> * Name should have more than 5 characters</span>
      <input type="text" v-model="formData.name" placeholder="your name..."/>
    </div>
    <!--  Phone number field  -->
    <div>
      <label>Enter your phone number</label>
      <span v-if="formError.phoneError" class="font-light text-xs text-red-500"> * Phone number should have 11 digits</span>
      <input type="tel" v-model="formData.phone" @keypress="checkPhoneInput($event)" maxlength="12" name="phone" placeholder="phone number..."/>
    </div>
    <!--  Select branch field  -->
    <div>
      <label>Select nearest branch</label>
      <span v-if="formError.branchError" class="font-light text-xs text-red-500"> * Please choose a branch</span>
      <select v-model="formData.branchSelection">
        <option value="" disabled selected>Choose branch</option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>
    <!--  Select grade/class field  -->
    <div>
      <label>Select grade/class</label>
      <span v-if="formError.gradeError" class="font-light text-xs text-red-500"> * Please choose a grade</span>
      <select v-model="formData.gradeSelection">
        <option value="" disabled selected>Choose grade</option>
        <option>Grade 1</option>
        <option>Grade 2</option>
        <option>Grade 3</option>
      </select>
    </div>
    <button @click="submitForm()" class="primary-button w-full mt-4" :class="isContactInfoSent ? 'bg-secondary' : ''" :disabled="isContactInfoSent">{{isContactInfoSent ? "Your information has been sent" : "Try a free class"}}</button>
    <p class="text-center text-xs my-3" v-if="isContactInfoSent">1000+ slots booked in last 24 hours</p>
    <p class="text-xs">By signing up, you agree to the Terms of Service and Privacy Policy. You also agree that you have parental consent. Important updates will be sent via WhatsApp.</p>
  </div>

</template>

<script setup lang="ts">
const formData = ref({
  name: '',
  phone: '+65',
  branchSelection: '',
  gradeSelection: '',
});

const formErrorInitialState = {
  nameError: false,
  phoneError: false,
  branchError: false,
  gradeError: false,
}
const formError = ref(formErrorInitialState);

const isContactInfoSent = ref(false);

function checkPhoneInput(evt: KeyboardEvent): void {
  const keysAllowed: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const keyPressed: string = evt.key;

  if(formData.value.phone.length < 3) formData.value.phone = '+65';
  if (!keysAllowed.includes(keyPressed)) {
    evt.preventDefault()
  }
}

function submitForm() {
  // Reset error states
  formError.value = formErrorInitialState;

  // Validate
  formError.value.nameError = formData.value.name.length < 5;
  formError.value.phoneError = formData.value.phone.length < 12;
  formError.value.branchError = formData.value.branchSelection === '';
  formError.value.gradeError = formData.value.gradeSelection === '';

  // Submit if no error
  if( !formError.value.nameError &&
  !formError.value.phoneError &&
  !formError.value.branchError &&
  !formError.value.gradeError) {
    $fetch('/api/sentContactInfo', {
      method: 'post',
      body: {
        name: formData.value.name,
        phone: formData.value.phone,
        branch: formData.value.branchSelection,
        grade: formData.value.gradeSelection,
      }
    }).then(() => {
      isContactInfoSent.value = true;
    })
  }
}
</script>