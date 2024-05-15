<script setup>
import AdminLayout from '../layouts/AdminLayout.vue'

import { RouterView } from 'vue-router';
</script>

<template>
    <AdminLayout>
        <div class="p-3 sm:ml-64">
            <div class="p-2 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                <RouterView />
            </div>
        </div>
    </AdminLayout>
</template>