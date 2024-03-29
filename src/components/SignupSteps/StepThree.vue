<script setup>
</script>

<template>
     <div class="stp step-3">
          <div class="header">
            <h1 class="title">Pick add-ons</h1>
            <p class="exp">Add-ons help enhance your gaming experience.</p>
          </div>
          <form>
            <div class="box" data-id="1">
              <input type="checkbox" id="online" />
              <div class="description">
                <label for="online">Online service</label>
                <small>Access to multiplayer games</small>
              </div>
              <p class="price">+$1/mo</p>
            </div>
            <div class="box" data-id="2">
              <input type="checkbox" id="larger" />
              <div class="description">
                <label for="larger">Larger storage</label>
                <small>Extra 1TB of cloud save</small>
              </div>
              <p class="price">+$2/mo</p>
            </div>
            <div class="box" data-id="3">
              <input type="checkbox" id="profile" />
              <div class="description">
                <label for="profile">Customizable Profile</label>
                <small>Custom theme on your profile</small>
              </div>
              <p class="price">+$2/mo</p>
            </div>
          </form>
          <div class="btns">
            <button class="prev-stp" type="button"  @click.prevent="$emit('prevStep')">Go Back</button>
            <button class="next-stp" type="submit"  @click.prevent="$emit('nextStep')">Next Step</button>
          </div>
        </div>
</template>

<style>
/* STEP 3 */
.step-3 {
  display: flex;
  width: 80%;
}
.step-3 form {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  gap: 1.5rem;
}
.box {
  border: 1px solid var(--Cool-gray);
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.description {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-left: 12px;
}
.price {
  margin-left: auto;
}
.ad-selected {
  border: 1px solid var(--Purplish-blue);
  background-color: var(--Magnolia);
}
.step-3 form input {
  accent-color: var(--Purplish-blue);
  transform: scale(1.3);
  user-select: none;
}
.description label {
  color: var(--Marine-blue);
  font-weight: 700;
  user-select: none;
}
.description small {
  color: var(--Cool-gray);
  font-weight: 700;
}
.price {
  color: var(--Purplish-blue);
}
</style>