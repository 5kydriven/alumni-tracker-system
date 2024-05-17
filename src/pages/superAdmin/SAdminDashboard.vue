<script setup>
import SuperBarChart from '../../components/charts/superAdminCharts/superBarChart.vue';
import SuperPieChart from '../../components/charts/superAdminCharts/superPieChart.vue';
</script>

<template>
    <div class="grid md:grid-cols-3 gap-2 mb-4">

        <div class="border shadow-lg shadow-2 p-3 rounded">
            <div class="flex justify-between mb-3 w-full">
                <div>
                    <span class="block text-500 font-medium mb-3">Alumni's</span>
                    <div class="text-900 font-bold text-2xl">152</div>
                </div>
                <div class="flex items-center justify-center bg-blue-100 rounded" style="width:2.5rem;height:2.5rem">
                    <i class="pi pi-users text-blue-500 text-xl"></i>
                </div>
            </div>
        </div>

        <div class="border shadow-lg shadow-2 p-3 rounded">
            <div class="flex justify-between mb-3 w-full">
                <div>
                    <span class="block text-500 font-medium mb-3">Employed</span>
                    <div class="text-900 font-bold text-2xl">152</div>
                </div>
                <div class="flex items-center justify-center bg-blue-100 rounded" style="width:2.5rem;height:2.5rem">
                    <i class="pi pi-user text-blue-500 text-xl"></i>
                </div>
            </div>
        </div>

        <div class="border shadow-lg shadow-2 p-3 rounded">
            <div class="flex justify-between mb-3 w-full">
                <div>
                    <span class="block text-500 font-medium mb-3">Unemployed</span>
                    <div class="text-900 font-bold text-2xl">152</div>
                </div>
                <div class="flex items-center justify-center bg-blue-100 rounded" style="width:2.5rem;height:2.5rem">
                    <i class="pi pi-user text-blue-500 text-xl"></i>
                </div>
            </div>
        </div>
    </div>

    <div class="h-96 grid grid-cols-12 gap-2 ">
        <div class="col-span-8 border shadow-lg shadow-2 rounded flex items-center">
            <SuperBarChart />
        </div>
        <div class="col-span-4 border shadow-lg shadow-2 rounded flex items-center justify-center">
            <SuperPieChart />
        </div>
    </div>
</template>