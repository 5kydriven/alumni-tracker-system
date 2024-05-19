<script setup>
import { onMounted, ref } from 'vue';
import Chart from 'chart.js/auto';
import { db } from "../../stores/firebase.js";
import { collection, onSnapshot } from "firebase/firestore";

const campuses = ref([]);
const employedCounts = ref([]);

// const generateRandomColor = () => `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

const updateChart = () => {
    const ctx = document.getElementById('doughnutChart').getContext('2d');
    // const backgroundColors = campuses.value.map(generateRandomColor);

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: campuses.value,
            datasets: [{
                data: employedCounts.value,
                // backgroundColor: backgroundColors,
                hoverOffset: 4
            }]
        },
        options: {
            plugins: {
                legend: {
                    align: 'center',
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: 'Employed Alumni per Campus',
                    align: 'start'
                }
            },
            responsive: false,
        }
    });
}

const fetchData = async () => {
    onSnapshot(collection(db, "alumni"), (querySnapshot) => {
        const campusMap = new Map();

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const campus = data.campus;
            const status = data.employment.status;

            if (status === 'Employed') {
                if (campusMap.has(campus)) {
                    campusMap.set(campus, campusMap.get(campus) + 1);
                } else {
                    campusMap.set(campus, 1);
                }
            }
        });

        campuses.value = Array.from(campusMap.keys());
        employedCounts.value = Array.from(campusMap.values());

        console.log("Campuses:", campuses.value);
        console.log("Employed counts:", employedCounts.value);

        updateChart();
    });
}

onMounted(() => {
    fetchData();
});
</script>

<template>
    <canvas id="doughnutChart"></canvas>
</template>
