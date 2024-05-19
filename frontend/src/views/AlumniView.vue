<template>
    <UserLayout>
        <RouterView />
    </UserLayout>
</template>

<script setup>
import UserLayout from '../layouts/UserLayout.vue'
import { RouterView } from 'vue-router';
</script>