<template>
  <div class="stp step-4">
    <div class="header">
      <h1 class="title">Finishing up</h1>
      <p class="exp">Double-check everything looks OK before confirming.</p>
    </div>
    <div class="selection-box">
      <div class="selection-container">
        <div class="selected-plan">
          <p class="plan-name">Arcade(Monthly)</p>
          <p class="plan-price">$9/mo</p>
        </div>
        <hr />
        <div class="addons">
          <template>
            <div class="selected-addon">
              <span class="service-name">Online serivice</span>
              <span class="servic-price">+$1/mo</span>
            </div>
          </template>
        </div>
      </div>
      <p class="total">Total (per month) <b>+$12/mo</b></p>
    </div>
    <div class="btns">
      <button class="prev-stp" type="button" @click.prevent="$emit('prevStep')">Go Back</button>
      <button class="next-stp" type="submit" @click.prevent="$emit('nextStep')">Next Step</button>
    </div>
  </div>
</template>

<style>
/* STEP 4 */
.step-4 {
  display: flex;
  width: 80%;
}
.selection-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
}
.selection-container {
  background-color: var(--Magnolia);
  padding: 1.5rem;
}
.selected {
  border: 2px solid var(--Purplish-blue);
  background-color: var(--Magnolia);
}
.selected-plan {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  color: var(--Marine-blue);
  font-weight: 700;
}
.selected-addon {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  color: var(--Cool-gray);
  font-weight: 500;
  font-size: 0.9rem;
}
.selected-addon .servic-price {
  color: var(--Marine-blue);
}
.total {
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--Cool-gray);
}
.total b {
  color: var(--Purplish-blue);
  font-size: 1.2rem;
}
</style>
