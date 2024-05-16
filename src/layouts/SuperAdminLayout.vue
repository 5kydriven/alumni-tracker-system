<template>
    <Navbar @isToggle="toggle"/>
    <Sidebar :isOpen="isSidebarOpen" />
    <slot></slot>
</template>

<script setup>
import {ref} from 'vue'
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';

const isSidebarOpen = ref(false)

const toggle = () => {
    isSidebarOpen.value = !isSidebarOpen.value
}
</script>