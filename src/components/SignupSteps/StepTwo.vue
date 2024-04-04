<script setup></script>

<template>
  <div class="stp step-2">
    <div class="header">
      <h1 class="title">School and Course information</h1>
      <p class="exp">Select the school you graduated and course.</p>
    </div>
    <form class="pt-4">
      <div>
        <label for="" class="form-label">School Campus</label>
        <select class="form-select" aria-label="Default select example">
          <option selected>Choose campus</option>
          <option value="San Carlos">San Carlos Campus</option>
          <option value="Kabankalan">Main Campus</option>
          <option value="Victorias">Victorias Campus</option>
        </select>
      </div>
      <div>
        <label for="" class="form-label">Course</label>
        <select class="form-select" aria-label="Default select example">
          <option selected>Choose course</option>
          <option value="BSIT">BSIT</option>
          <option value="BSCRIM">BSCRIM</option>
          <option value="BSED">BSED</option>
        </select>
      </div>
      <div>
        <label for="" class="form-label">Year Graduated</label>
        <select class="form-select" aria-label="Default select example">
          <option selected>Choose Year</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
        </select>
      </div>
    </form>
    <div class="btns">
      <button class="prev-stp" type="button" @click.prevent="$emit('prevStep')">Go Back</button>
      <button class="next-stp" type="submit" @click.prevent="$emit('nextStep')">Next Step</button>
    </div>
  </div>
</template>

<style>
/* STEP 2 */
.step-2 {
  display: flex;
  width: 90%;
}
.step-2 form {
  display: flex;
  flex: 1;
  gap: 1rem;
  flex-direction: column;
}
.form-select {
  padding: 0.5rem !important;
  border: 1px solid var(--Cool-gray) !important;
  border-radius: 7px !important;
  font-size: 1rem !important;
  box-shadow: none !important;
}
.form-select:focus {
  border-color: var(--Purplish-blue) !important;
}
form input::placeholder {
  font-weight: 500 !important;
  font-size: 1rem !important;
  font-family: inherit !important;
}
.plan-card {
  border: 2px solid var(--Light-gray);
  border-radius: 7px;
  width: 150px;
  height: 170px;
  cursor: pointer;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
.plan-info {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.plan-info b {
  color: var(--Marine-blue);
}
.plan-info span {
  color: var(--Cool-gray);
}
.monthly,
.yearly {
  color: var(--Cool-gray);
  font-weight: 500;
}
.sw-active {
  color: var(--Marine-blue);
}
.btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.prev-stp {
  margin-top: auto;
  margin-bottom: 2rem;
  border: none;
  font-weight: 700;
  background-color: transparent;
  padding: 1rem 2rem;
  border-radius: 7px;
  color: var(--Cool-gray);
  cursor: pointer;
}
</style>
