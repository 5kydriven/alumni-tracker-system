<template>
    <div class="card">
        <DataTable ref="dt" v-model:filters="filters" scrollable scroll-height="450px" showGridlines removableSort
            filterDisplay="menu" class="z-30" :value="store.alumni">
            <template #header>
                <div class="flex justify-between">
                    <div class="flex gap-2">
                        <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined @click="clearFilter()" />
                        <!-- <Button type="button" icon="pi pi-plus" label="Add" severity="secondary" outlined /> -->
                        <Button type="button" icon="pi pi-file-export" label="Export" severity="secondary" outlined
                            @click="exportCSV()" :disabled="!store.alumni" />
                        <Button type="button" icon="pi pi-file-import" label="Import" severity="secondary" outlined
                            @click="store.openDialog('top')" />

                    </div>
                    <span class="relative">
                        <i class="pi pi-search absolute top-2/4 -mt-2 left-3 text-surface-400 dark:text-surface-600" />
                        <InputText v-model="filters['global'].value" placeholder="Keyword Search"
                            class="pl-10 font-normal" :disabled="!store.alumni" />
                    </span>
                </div>
            </template>
            <template #empty> No alumni found. </template>

            <Column header="#">
                <template #body="slotProps">
                    {{ slotProps.index + 1 }}
                </template>
            </Column>

            <Column field="Name" sortable header="Name">
            </Column>

            <Column field="Course" header="Course" :showFilterMatchModes="false">
                <template #filter="{ filterModel }">
                    <Dropdown v-model="filterModel.value" :options="courses" placeholder="Select One"
                        class="p-column-filter" showClear>
                        <template #option="slotProps">
                            <Tag :value="slotProps.option" />
                        </template>
                    </Dropdown>
                </template>
            </Column>

            <Column field="Batch" header="Batch" :showFilterMatchModes="false">
                <template #filter="{ filterModel }">
                    <Dropdown v-model="filterModel.value" :options="batches" placeholder="Select One"
                        class="p-column-filter" showClear>
                        <template #option="slotProps">
                            <Tag :value="slotProps.option" />
                        </template>
                    </Dropdown>
                </template>
            </Column>

            <Column field="Status" header="Status" :showFilterMatchModes="false">
                <template #filter="{ filterModel }">
                    <Dropdown v-model="filterModel.value" :options="employment" placeholder="Select One"
                        class="p-column-filter" showClear>
                        <template #option="slotProps">
                            <Tag :value="slotProps.option" />
                        </template>
                    </Dropdown>
                </template>
            </Column>

            <Column header="Actions" class="text-center">
                <template #body="{ data }">
                    <i class="pi pi-ellipsis-v cursor-pointer" @click="toggle"></i>
                    <OverlayPanel ref="op">
                        <div
                            class="z-10 w-28 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
                                <li>
                                    <a href="#"
                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white "
                                        @click="showProfile">Show</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                </li>
                            </ul>
                        </div>
                    </OverlayPanel>
                </template>
            </Column>
        </DataTable>
    </div>

    <Dialog v-model:visible="store.dialogVisible" :style="{ width: '40rem' }" :position="store.dialogPosition"
        :draggable="false" modal header="Import File">
        <ImportForm @formSuccess="onFormSuccess" />
    </Dialog>

    <Toast />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ImportForm from '@/components/ImportForm.vue';
import { useAlumniStore } from '@/stores/AlumniStore.js'
import { useToast } from 'primevue/usetoast';

const toast = useToast();
const store = useAlumniStore();

const onFormSuccess = (message) => {
    toast.add({ severity: 'success', summary: 'Success', detail: message, life: 3000 });
};

const filters = ref();
const courses = ref(['BSIT', 'BSCRIM', 'BSBA'])
const batches = ref([2026, 2024])
const employment = ref(['Not Track', 'Unemployed', 'Employed'])
const dt = ref();
const op = ref();
const profile = ref(false);

const toggle = (event) => {
    op.value.toggle(event);
}

const showProfile = () => {
    profile.value = !profile.value
}

const initFilters = () => {
    filters.value = {
        global: { value: null },
        Name: { value: null },
        Status: { value: null },
        Course: { value: null },
        Batch: { value: null },
    };
};

initFilters();

const clearFilter = () => {
    initFilters();
};

const exportCSV = () => {
    dt.value.exportCSV();
};

onMounted(() => {
    store.getAlumni();
})
</script>