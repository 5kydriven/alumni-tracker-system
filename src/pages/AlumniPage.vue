<template>
    <div class="card">
        <DataTable v-model:filters="filters" :value="store.alumni" ref="dt" scrollable scroll-height="450px"
            showGridlines removableSort filterDisplay="menu">
            <template #header>
                <div class="flex justify-between">
                    <div class="flex gap-2">
                        <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined @click="clearFilter()" />
                        <Button type="button" icon="pi pi-plus" label="Add" severity="secondary" outlined
                            @click="openNew" />
                        <Button type="button" icon="pi pi-external-link" label="Export" severity="secondary" outlined
                            @click="exportCSV($event)" />

                    </div>
                    <span class="relative">
                        <i class="pi pi-search absolute top-2/4 -mt-2 left-3 text-surface-400 dark:text-surface-600" />
                        <InputText v-model="filters['global'].value" placeholder="Keyword Search"
                            class="pl-10 font-normal" />
                    </span>
                </div>
            </template>
            <template #empty> No alumni found. </template>

            <Column header="No.">
                <template #body="slotProps">
                    {{ slotProps.index + 1 }}
                </template>
            </Column>

            <Column field="fullname" sortable header="Name">
            </Column>

            <Column field="contactnumber" header="Contact"></Column>

            <Column field="course" header="Course" :showFilterMatchModes="false">
                <template #filter="{ filterModel }">
                    <Dropdown v-model="filterModel.value" :options="courses" placeholder="Select One"
                        class="p-column-filter" showClear>
                        <template #option="slotProps">
                            <Tag :value="slotProps.option" />
                        </template>
                    </Dropdown>
                </template>
            </Column>

            <Column field="campus" header="Campus"></Column>

            <Column field="batch" header="Batch" :showFilterMatchModes="false">
                <template #filter="{ filterModel }">
                    <Dropdown v-model="filterModel.value" :options="batches" placeholder="Select One"
                        class="p-column-filter" showClear>
                        <template #option="slotProps">
                            <Tag :value="slotProps.option" />
                        </template>
                    </Dropdown>
                </template>
            </Column>

            <Column field="employment.status" header="Status" :showFilterMatchModes="false">
                <template #filter="{ filterModel }">
                    <Dropdown v-model="filterModel.value" :options="employment" placeholder="Select One"
                        class="p-column-filter" showClear>
                        <template #option="slotProps">
                            <Tag :value="slotProps.option" />
                        </template>
                    </Dropdown>
                </template>
            </Column>

            <Column header="Actions">
                
            </Column>
        </DataTable>
    </div>

    <Dialog v-model:visible="store.alumniDialog" :style="{ width: '700px' }" header="Add Alumni" :modal="true"
        class="p-fluid">
        <AlumniForm @cancel="openNew" />
    </Dialog>
    <Toast />
</template>

<script setup>
import AlumniForm from '@/components/AlumniForm.vue';
import { useAlumniStore } from '@/stores/AlumniStore';
import { onMounted, ref } from 'vue';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const store = useAlumniStore();

const filters = ref();
const courses = ref(['BSIT', 'BSCRIM', 'BSBA'])
const batches = ref([2026, 2024])
const employment = ref(['Not Track', 'Unemployed', 'Employed'])

const dt = ref();

const openNew = () => {
    store.alumniDialog = !store.alumniDialog
    if (!store.alumniDialog) {
        toast.add({ severity: 'success', summary: 'Successful', detail: 'Click', life: 2000 });
    }
}

const initFilters = () => {
    filters.value = {
        global: { value: null },
        firstname: { value: null},
        contactnumber: { value: null},
        course: { value: null},
        campus: { value: null},
        batch: { value: null},
        'employment.status': { value: null},

    };
};

initFilters();

const clearFilter = () => {
    initFilters();
};

const exportCSV = () => {
    dt.value.exportCSV();
};

onMounted(async () => {
    await store.filteredAlumni("Kabankalan City"); // Wait for the data to be fetched
    // loading.value = false;
})
</script>
