<script setup></script>

<template>
  <div class="stp step-1">
    <div class="header">
      <h1 class="title">Personal Information</h1>
      <p class="exp">Please provide your First Name, Last Name, and Middle Initial.</p>
    </div>
    <form >
      <div class="label">
        <label for="name">First Name</label>
        <p class="error">This Field Is Required</p>
      </div>
      <input required type="text" id="name" placeholder="e.g. Juan" />
      <div class="label">
        <label for="email">Last Name</label>
        <p class="error">This Field Is Required</p>
      </div>
      <input required type="text" id="email" placeholder="e.g. Dela Cruz" />
      <div class="label">
        <label for="phone">Middle Initial</label>
        <p class="error">This Field Is Required</p>
      </div>
      <input required type="text" id="phone" placeholder="e.g. P" />
      <div class="label">
        <label for="Suffix">Suffix</label>
        <p class="error">This Field Is Required</p>
      </div>
      <input required type="text" id="Suffix" placeholder="e.g. Jr" class="mb-4" />
      <div class="btns">
        <button class="next-stp" type="submit" @click.prevent="$emit('nextStep')">Next Step</button>
      </div>
    </form>
  </div>
</template>

<style>
/* STEP 1 */
.step-1 {
  display: flex;
  width: 90%;
}
.step-1 form {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  gap: 0.5rem;
}
.label {
  color: var(--Marine-blue);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.step-1 form input {
  padding: 0.5rem;
  border: 1px solid var(--Cool-gray);
  border-radius: 7px;
  font-weight: 500;
  font-size: 1rem;
}
.step-1 form input:focus {
  outline-color: var(--Purplish-blue);
}
form input::placeholder {
  font-weight: 500;
  font-size: 1rem;
  font-family: inherit;
}
form .error {
  display: none;
  color: var(--Strawberry-red);
  font-size: 0.9rem;
  font-weight: 700;
}
</style>
