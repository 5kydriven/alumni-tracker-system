<script setup>
import { onMounted, ref } from 'vue'
import Chart from 'chart.js/auto';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '@/stores/firebase.js'; // import your Firebase configuration

const selectedCampus = localStorage.getItem('campus'); // Replace with your specific campus name
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const employed = ref(months.map(month => ({ month, value: 0 })));
const unemployed = ref(months.map(month => ({ month, value: 0 })));

const q = query(
    collection(db, "alumni"),
    where("dateAdded", ">=", new Date(new Date().getFullYear(), 0, 1)),
    where("dateAdded", "<", new Date(new Date().getFullYear() + 1, 0, 1)),
    where("campus", "==", selectedCampus) // Add campus filter
);

const updateChart = () => {
    const ctx = document.getElementById('barChart').getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: months,
            datasets: [
                {
                    label: 'Employed',
                    data: employed.value.map(item => item.value), // Extracting only values
                    backgroundColor: '#31C48D',
                },
                {
                    label: 'Unemployed',
                    data: unemployed.value.map(item => item.value), // Extracting only values
                    backgroundColor: '#F98080',
                },
            ]
        },
        options: {
            plugins: {
                legend: {
                    align: 'end',
                    position: 'top'
                },
                title: {
                    display: true,
                    align: 'start',
                    text: 'Employment Status Over the Year',
                    position: 'top'
                },
            },
            responsive: true,
            interaction: {
                intersect: false,
            },
        }
    });
}

const getAllData = () => {
    onSnapshot(q, (querySnapshot) => {
        // Reset the values to 0 before updating
        employed.value.forEach(item => item.value = 0);
        unemployed.value.forEach(item => item.value = 0);

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const status = data.employment.status;
            const timestamp = data.dateAdded;
            const date = timestamp.toDate(); // Convert Timestamp to Date
            const monthIndex = date.getMonth(); // Get the month index

            if (status === 'Employed') {
                employed.value[monthIndex].value += 1;
            } else if (status === 'Unemployed') {
                unemployed.value[monthIndex].value += 1;
            }
        });

        // Update the chart with the new data
        updateChart();
    });
}

onMounted(() => {
    getAllData();
});
</script>

<template>
    <canvas id="barChart"></canvas>
</template>
