<template>
    <Navbar :isUser="true" />
    <slot></slot>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
</script>