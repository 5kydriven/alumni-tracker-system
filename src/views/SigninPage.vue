<script setup>
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <Navbar />
  <div class="container-signin">
    <div class="login-container">
      <div class="login-header">
        <h1>Hey, Welcome Back!</h1>
        <h5>ssffsdfasdfasdfasdfad</h5>
      </div>
      <div class="login-form">
        <form action="">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <button type="button" class="btn btn-primary">
            Sign in
          </button>
        </form>
      </div>
    </div>
    <div class="leftside-extra"></div>
  </div>
</template>

<style>
.container-signin {
  display: flex;
  height: 91vh;
}
.leftside-extra {
  border: 1px solid black;
  width: 100%;
}
.login-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
