<script setup>
import { onMounted } from 'vue'
import Chart from 'chart.js/auto';

onMounted(() => {
    const ctx = document.getElementById('superBarChart');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [
            {
                label: 'Bar 1',
                data: [12, 14, 3, 25, 21, 31],
            },
            {
                label: 'Bar 2',
                data: [12, 19, 3, 15, 2, 13],
            },
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    align: 'end',
                },
                title: {
                    align: 'start',
                    display: true,
                    text: 'Bar Chart',
                    padding: 0,
                }
            },
            layout: {
                padding: {
                    left: 10,
                    right: 10,
                },
            }
        }
    });
})
</script>

<template>
    <canvas id="superBarChart"></canvas>
</template>