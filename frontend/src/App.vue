<script setup>
import { useRouter, RouterView } from 'vue-router'
import { onMounted, onBeforeMount } from "vue";
import { auth, db } from './stores/firebase';
import { doc, getDoc } from 'firebase/firestore';
import {useAuthStore} from './stores/AuthStore.js'

const store = useAuthStore();

onMounted(() => {
  store.init();
})
</script>

<template>
  <RouterView />
</template>
