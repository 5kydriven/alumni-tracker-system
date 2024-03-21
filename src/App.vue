<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
      <a class="navbar-brand fw-bold" href="#">
        Bootstrap
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav gap-4">
          <li class="nav-item">
            <button type="button" class=" btn btn-outline-success" aria-current="page" href="#">Sign in</button>
          </li>
          <li class="nav-item">
            <button type="button" class=" btn btn-success" href="#">Sign up</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <RouterView />
</template>

<style scoped>

</style>
