<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
  import '@/assets/test.css'
  import Sidebar from '@/components/SignupSteps/Sidebar.vue'
  import StepOne from '@/components/SignupSteps/StepOne.vue'
  import StepTwo from '@/components/SignupSteps/StepTwo.vue'
  import StepThree from '@/components/SignupSteps/StepThree.vue'
  import StepFour from '@/components/SignupSteps/StepFour.vue'
  import StepFive from '@/components/SignupSteps/StepFive.vue'
</script>

<template>
  <div class="body">
    <div class="form">
      <div class="form-container">

        <Sidebar />

        <StepOne />

        <StepTwo />

        <StepThree />       

        <StepFour />        

        <StepFive />

      </div>
    </div>
  </div>
</template>

<style>
.hidden {
  display: none;
}
img {
  max-width: 100%;
}

.form {
  width: 900px;
  background-color: var(--White);
  border-radius: 1rem;
  box-shadow: 0px 0px 1px black;
}
.form-container {
  display: flex;
  padding: 1rem;
}

.err {
  border: 2px solid var(--Strawberry-red) !important;
}

.stp {
  flex-direction: column;
  justify-content: center;
}
.stp .header {
  margin-bottom: auto;
  padding-top: 2rem;
  line-height: 2.5rem;
}
.header .title {
  color: var(--Marine-blue);
  font-size: 2em;
  font-weight: bold;
  display: block;
  margin: 0 !important;
}
.header .exp {
  color: var(--Cool-gray);
  margin: 0 !important;
}
.next-stp {
  margin-top: auto;
  margin-bottom: 2rem;
  margin-left: auto;
  border: none;
  padding: 1rem 2rem;
  border-radius: 7px;
  background-color: var(--Marine-blue);
  color: white;
  cursor: pointer;
}

/* SWITCH classes */
.switcher {
  background-color: var(--Magnolia);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  margin-bottom: 5rem;
  justify-content: center;
}
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--Marine-blue);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
@media screen and (max-width: 800px) {
  body {
    position: relative;
  }
  .form-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-image: url('@/assets/images/bg-sidebar-mobile.svg');
    flex-direction: row;
    height: 300px;
    background-size: cover;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    z-index: -1;
  }
  .step-content {
    display: none;
  }
  .form {
    position: absolute;
    top: 15%;
    max-width: 375px;
    background-color: white;
  }
  .form-container {
    padding: 2rem;
  }
  .btns {
    position: fixed;
    bottom: 0;
    background-color: white;
    right: 0;
    left: 0;
    height: 100px;
    padding-inline: 1rem;
  }
  .step-1 .btns button {
    margin: auto 0 auto auto;
  }
  .step-2 form {
    flex-direction: column;
    gap: 0.5rem;
  }
  .plan-card {
    width: 100%;
    height: 100px;
    flex-direction: row;
    justify-content: flex-start;
    gap: 1rem;
    align-items: center;
  }
  .stp {
    gap: 1rem;
    width: 100%;
  }
  .stp .header {
    padding-top: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    line-height: 1.5rem;
  }
  .switcher {
    margin: 2rem 0;
  }
}
</style>
