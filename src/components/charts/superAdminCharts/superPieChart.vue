<script setup>
import { onMounted } from 'vue'
import Chart from 'chart.js/auto';


onMounted(() => {
    const ctx = document.getElementById('superPieChart');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['San Carlos City', 'Kabangkalan City'],
            datasets: [
                {
                    label: 'Employed',
                    data: [12, 19],
                },
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                },
                title: {
                    display: true,
                    text: 'Campuses',
                    position: 'top',
                    font: { 
                        weight: 'bold' 
                    }
                }
            }
        }
    });
})
</script>

<template>
    <canvas id="superPieChart"></canvas>
</template>