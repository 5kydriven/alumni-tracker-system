<script setup>
import { ref } from 'vue'

const employed = ref(null)
const typeEmployed = ref(null)
</script>

<template>
  <div class="stp step-3">
    <div class="header">
      <h1 class="title">Employment Status</h1>
      <p class="exp">Add-ons help enhance your gaming experience.</p>
    </div>
    <form>
      <div>
        <label for="">Have you ever been employed anytime after graduation?</label>
        <div class="radio-container ps-3">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              value="employed"
              v-model="employed"
              required
            />
            <label class="form-check-label"> Yes, I have been employed </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              value="notEmployed"
              v-model="employed"
              required
            />
            <label class="form-check-label">No, I was never employed</label>
          </div>
        </div>
      </div>
      <div v-if="employed === 'employed'">
        <label for="">Type of Employment</label>
        <div class="radio-container ps-3">
          <div class="form-check">
            <input class="form-check-input" type="radio" v-model="typeEmployed" value="formal" />
            <label class="form-check-label">Formally Employed</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" v-model="typeEmployed" value="self" />
            <label class="form-check-label">Self Employed</label>
          </div>
        </div>
      </div>

      <!-- Formally employed -->
      <div v-if="typeEmployed === 'formal' && employed === 'employed'">
        <label class="form-label">Company Name (latest employer if employed several times)</label>
        <input type="text" class="form-control" required/>
      </div>
      <div v-if="typeEmployed === 'formal' && employed === 'employed'">
        <label for="formFile" class="form-label"
          >Please upload any form of proof such as I.D if available</label
        >
        <input class="form-control" type="file" id="formFile" />
      </div>

      <!-- Self employed -->
      <div v-if="typeEmployed === 'self' && employed === 'employed'">
        <label class="form-label">Type of business</label>
        <input type="text" class="form-control" required/>
      </div>
      <div v-if="typeEmployed === 'self' && employed === 'employed'">
        <label for="formFile" class="form-label"
          >Please upload any form of proof such as business permit if available</label
        >
        <input class="form-control" type="file" id="formFile" />
      </div>
    </form>
    <div class="btns">
      <button class="prev-stp" type="button" @click.prevent="$emit('prevStep')">Go Back</button>
      <button
        class="next-stp"
        type="submit"
        @click.prevent="$emit('nextStep')"
        :disabled="employed === null || typeEmployed === null ? true : false"
      >
        Next Step
      </button>
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
  gap: 1rem;
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
/* .step-3 form input {
  accent-color: var(--Purplish-blue);
  transform: scale(1.3);
  user-select: none;
} */
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
