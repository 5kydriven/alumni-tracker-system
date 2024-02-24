<template>
  <nav class="navbar navbar-light bg-light navbar-expand-lg mb-5">
    <div class="container">
      <a>Logo</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item">
          <button
            type="button"
            class="nav-link"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Not an alumni?
          </button>
        </li>
      </ul>
    </div>
  </nav>
  <router-view />
</template>

<style></style>
