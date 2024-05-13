<script setup>
import { onMounted } from 'vue'
import Chart from 'chart.js/auto';


onMounted(() => {
    const ctx = document.getElementById('pieChart');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'pink', 'black', 'gray'],
            datasets: [
                {
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3, 2, 3, 18],
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
                    text: 'All Course',
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
    <canvas id="pieChart"></canvas>
</template>