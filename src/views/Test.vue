<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="form-box">
    <div class="step-progress">
      <div class="logo">
        <a href=""> Logo </a>
      </div>
      <ul class="progress-steps">
        <li class="step active">
          <span>1</span>
          <p>Personal</p>
        </li>
        <li class="step">
          <span>2</span>
          <p>Personal</p>
        </li>
        <li class="step">
          <span>3</span>
          <p>Personal</p>
        </li>
      </ul>
    </div>
    <form action="">
      <div class="form-one form-step">
        <div class="bg-svg"></div>
        <h2>personbal info</h2>
        <p>asdgfasdg</p>
        <div>
          <label for="">first name</label>
          <input type="text" />
        </div>
        <div>
          <label for="">Last name</label>
          <input type="text" />
        </div>
        <div class="birth">
          <label for="">Date of birth</label>
          <div class="grouping">
            <input type="text" pattern="[0-9]*" name="day" value="" min="0" max="31" />
            <input type="text" pattern="[0-9]*" name="month" value="" min="0" max="12" />
            <input type="text" pattern="[0-9]*" name="year" value="" min="0" max="2050" />
          </div>
        </div>
      </div>

      <!-- <div class="form-two form-step">
        <div class="bg-svg"></div>
        <h2>Contact info</h2>
        <div>
          <label for="">Phone</label>
          <input type="text" />
        </div>
        <div>
          <label for="">Address</label>
          <input type="text" />
        </div>
        <div>
          <input type="text" />
        </div>
        <div>
          <label for="">City</label>
          <input type="text" />
        </div>
        <div>
          <label for="">State</label>
          <input type="text" />
        </div>
        <div>
          <label for="">Zip code</label>
          <input type="text" />
        </div>
        <div>
          <label for="">Country</label>
          <input type="text" />
        </div>
      </div>

      <div class="form-three form-step">
        <div class="bg-svg"></div>
        <h2>Acount</h2>
        <div>
          <label for="">Email</label>
          <input type="text" />
        </div>
        <div>
          <label for="">Username</label>
          <input type="text" />
        </div>
        <div>
          <label for="">Password</label>
          <input type="text" />
        </div>
        <div>
          <label for="">Email</label>
          <input type="text" />
        </div>
      </div> -->
    </form>
  </div>
</template>

<script setup></script>

<style>
ul li {
  list-style: none;
}

.form-box {
  /* border: 1px solid black; */
  margin: 1.5em;
  display: flex;
}
.step-progress {
  border: 1px solid black;
  width: 20em;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5em;
}

.logo {
  margin-bottom: 5em;
}

.progress-steps .step span {
  width: 40px;
  height: 40px;
  background-color: grey;
  border-radius: 50%;
}
</style>
