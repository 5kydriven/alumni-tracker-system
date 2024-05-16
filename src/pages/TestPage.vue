<template>
    <div class="card">
        <DataTable :value="store.alumni" tableStyle="min-width: 50rem">
            <Column field="firstname" header="firstname"></Column>
            <Column field="lastname" header="lastName"></Column>
            <Column field="batch" header="batch"></Column>
            <Column field="campus" header="campus"></Column>
        </DataTable>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';
import { useAlumniStore } from '@/stores/AlumniStore';

const store = useAlumniStore();

onMounted(async () => {
    await store.filteredAlumni(); // Wait for the data to be fetched
    // customers.value = store.alumni
    // loading.value = false;
})


const products = ref([{
    code: 1234,
    name: 'asdfas',
    category: 'awer',
    quantity: 'awer',
}]);

</script>
