<script setup>
import { RouterView } from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
</script>

<template>
    <DefaultLayout>
        <div class="p-3 md:ml-64">
            <div class="p-2 rounded-lg mt-14">
                <RouterView></RouterView>
            </div>
        </div>
    </DefaultLayout>
</template>