<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand fw-bold text-dark" href="#"> Bootstrap </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav gap-4">
          <li class="nav-item">
            <button type="button" class="btn btn-outline-success" aria-current="page" href="#">
              Sign in
            </button>
          </li>
          <li class="nav-item">
            <a type="button" class="btn btn-success" href="/signup">Sign up</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style></style>
