<script setup>
import PieChart from '../components/charts/PieChart.vue'
import BarChart from '../components/charts/BarChart.vue'
</script>

<template>
    <div class="grid grid-cols-4 gap-2 mb-4">

        <div class="border shadow-lg shadow-2 p-3 rounded">
            <div class="flex justify-between mb-3 w-full">
                <div>
                    <span class="block text-500 font-medium mb-3">Alumni's</span>
                    <div class="text-900 font-medium text-xl">152</div>
                </div>
                <div class="flex align-center justify-center bg-blue-100 rounded" style="width:2.5rem;height:2.5rem">
                    <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
                </div>
            </div>
            <span class="text-green-500 font-medium">24 new </span>
            <span class="text-500">since last visit</span>
        </div>

        <div class="border shadow-lg shadow-2 p-3 rounded">
            <div class="flex justify-between mb-3 w-full">
                <div>
                    <span class="block text-500 font-medium mb-3">Employed</span>
                    <div class="text-900 font-medium text-xl">152</div>
                </div>
                <div class="flex align-center justify-center bg-blue-100 rounded" style="width:2.5rem;height:2.5rem">
                    <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
                </div>
            </div>
            <span class="text-green-500 font-medium">24 new </span>
            <span class="text-500">since last visit</span>
        </div>

        <div class="border shadow-lg shadow-2 p-3 rounded">
            <div class="flex justify-between mb-3 w-full">
                <div>
                    <span class="block text-500 font-medium mb-3">Unemployed</span>
                    <div class="text-900 font-medium text-xl">152</div>
                </div>
                <div class="flex align-center justify-center bg-blue-100 rounded" style="width:2.5rem;height:2.5rem">
                    <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
                </div>
            </div>
            <span class="text-green-500 font-medium">24 new </span>
            <span class="text-500">since last visit</span>
        </div>

        <div class="border shadow-lg shadow-2 p-3 rounded">
            <div class="flex justify-between mb-3 w-full">
                <div>
                    <span class="block text-500 font-medium mb-3">order</span>
                    <div class="text-900 font-medium text-xl">152</div>
                </div>
                <div class="flex align-center justify-center bg-blue-100 rounded" style="width:2.5rem;height:2.5rem">
                    <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
                </div>
            </div>
            <span class="text-green-500 font-medium">24 new </span>
            <span class="text-500">since last visit</span>
        </div>

    </div>

    <div class="h-96 grid grid-cols-12 gap-2 ">
        <div class="col-span-8 border shadow-lg shadow-2 rounded flex items-center">
            <BarChart />
        </div>
        <div class="col-span-4 border shadow-lg shadow-2 rounded flex items-center justify-center">
            <PieChart />
        </div>
    </div>
</template>