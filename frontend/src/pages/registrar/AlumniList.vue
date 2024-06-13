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
                                <!-- <li>
                                    <a href="#"
                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                </li> -->
                            </ul>
                        </div>
                    </OverlayPanel>
                </template>
            </Column>
        </DataTable>
    </div>

<<<<<<< HEAD:frontend/src/pages/AlumniPage.vue
    <Dialog v-model:visible="store.alumniDialog" :style="{ width: '700px' }" header="Add Alumni" :modal="true"
        class="p-fluid">
        <AlumniForm />
    </Dialog>
    <Dialog v-model:visible="profile" :style="{ width: '500px' }" header="Alumni Profile" :modal="true" class="p-fluid">
        <div class="flex justify-between px-4">
            <div>
                <div>
                    <label class="text-gray-500 text-xs font-light">Name</label>
                    <p class="text-gray-900 text-base font-semibold ">Mhel Angelo O. Tagpuno</p>
                </div>
                <div>
                    <label class="text-gray-500 text-xs font-light">Student ID</label>
                    <p class="text-gray-900 text-base font-semibold">215843</p>
                </div>
                <div>
                    <label class="text-gray-500 text-xs font-light">Mobile Number</label>
                    <p class="text-gray-900 text-base font-semibold">09385254044</p>
                </div>
                <div>
                    <ul class=" text-gray-400 text-xs font-thin list-none ">
                        <li>
                            School Information
                            <ul class="ps-2 list-none list-inside font-semibold text-sm text-gray-900">
                                <li><span class="text-xs font-thin text-gray-400 mr-1">-</span>San Carlos Campus</li>
                                <li><span class="text-xs font-thin text-gray-400 mr-1">-</span>BSIT</li>
                                <li><span class="text-xs font-thin text-gray-400 mr-1">-</span>Batch 2026</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="flex flex-col justify-between w-44 items-center ">
                <ul class="text-gray-400 text-xs font-thin list-none ">
                    <li>
                        Employement Information
                        <ul class="ps-2 list-none list-inside font-semibold text-sm text-gray-900">
                            <li><span class="text-xs font-thin text-gray-400 mr-1">-</span>Self Employed</li>
                            <li><span class="text-xs font-thin text-gray-400 mr-1">-</span>Sky Enterprise</li>
                            <li><span class="text-xs font-thin text-gray-400 mr-1">-</span>img</li>
                        </ul>
                    </li>
                </ul>
                <div class="flex gap-4">
                    <button type="button"
                        class="text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 text-sm px-3 py-2 ">Delete</button>
                    <button type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2">Edit</button>
                </div>
            </div>
        </div>

=======
    <Dialog v-model:visible="store.dialogVisible" :style="{ width: '40rem' }" :position="store.dialogPosition"
        :draggable="false" modal header="Import File">
        <ImportForm @formSuccess="onFormSuccess" />
>>>>>>> 65e175740855b3034bc5b80866ae7069b8feb793:frontend/src/pages/registrar/AlumniList.vue
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