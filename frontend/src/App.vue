<script setup>
import { RouterView } from 'vue-router';
import { useAuthStore } from './stores/AuthStore';
import { onMounted } from 'vue';

const authStore = useAuthStore();
onMounted(() => {
  authStore.init();
})
</script>

<template>
  <!-- <div v-if="authStore.loading">Loading...</div>
  <div v-else> -->
    <RouterView />
  <!-- </div> -->
</template>
