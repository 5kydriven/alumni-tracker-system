<script setup></script>

<template>
    <div class="stp step-2">
          <div class="header">
            <h1 class="title">School and Course information</h1>
            <p class="exp">Select the school you graduated and course.</p>
          </div>
          <form @submit.prevent>
            <div class="plan-card selected">
              <img src="@/assets/images/icon-arcade.svg" alt="arcade" />
              <div class="plan-info chosen">
                <b>Arcade</b>
                <span class="plan-priced">$9/mo</span>
              </div>
            </div>
            <div class="plan-card">
              <img src="@/assets/images/icon-advanced.svg" alt="arcade" />
              <div class="plan-info">
                <b>Advanced</b>
                <span class="plan-priced">$12/mo</span>
              </div>
            </div>
            <div class="plan-card">
              <img src="@/assets/images/icon-pro.svg" alt="arcade" />
              <div class="plan-info">
                <b>Pro</b>
                <span class="plan-priced">$15/mo</span>
              </div>
            </div>
          </form>
          <div class="switcher">
            <p class="monthly sw-active">Monthly</p>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
            <p class="yearly">Yearly</p>
          </div>
          <div class="btns">
            <button class="prev-stp" type="button" @click.prevent="$emit('prevStep')">Go Back</button>
            <button class="next-stp" type="submit"  @click.prevent="$emit('nextStep')">Next Step</button>
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
  align-items: center;
  gap: 2rem;
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