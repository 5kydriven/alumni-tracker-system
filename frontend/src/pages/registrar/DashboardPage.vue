<script setup>
import { RouterView } from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
</script>

<template>
    <DefaultLayout>
        <div class="p-3 md:ml-64">
            <div class="p-2 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                <RouterView></RouterView>
            </div>
        </div>
    </DefaultLayout>
</template>