<script setup>
import { onMounted, ref } from 'vue';
import Chart from 'chart.js/auto';
import { db } from "../../stores/firebase.js";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const selectedCampus = localStorage.getItem('campus'); // Replace with your specific campus name
const course = ref([]);
const employedCounts = ref([]);

// const generateRandomColor = () => `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

const updateChart = () => {
    const ctx = document.getElementById('pieChart').getContext('2d');
    // const backgroundColors = course.value.map(generateRandomColor);

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: course.value,
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
                    text: 'Employed Alumni per Course',
                    align: 'start'
                }
            },
            responsive: false,
        }
    });
}

const fetchData = async () => {
    const q = query(collection(db, "alumni"), where("campus", "==", selectedCampus));
    onSnapshot(q, (querySnapshot) => {
        const courseMap = new Map();

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const courseName = data.course;
            const status = data.employment.status;

            if (status === 'Employed') {
                if (courseMap.has(courseName)) {
                    courseMap.set(courseName, courseMap.get(courseName) + 1);
                } else {
                    courseMap.set(courseName, 1);
                }
            }
        });

        course.value = Array.from(courseMap.keys());
        employedCounts.value = Array.from(courseMap.values());

        console.log("Courses:", course.value);
        console.log("Employed counts:", employedCounts.value);

        updateChart();
    });
}

onMounted(() => {
    fetchData();
});
</script>

<template>
    <canvas id="pieChart"></canvas>
</template>
