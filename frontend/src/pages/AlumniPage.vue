<template>
    <div class="card">
        <DataTable v-model:filters="filters" :value="store.alumni" ref="dt" scrollable scroll-height="450px"
            showGridlines removableSort filterDisplay="menu" class="z-30">
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

            <Column field="studentId" header="Student ID"></Column>

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

            <Column field="campus" header="Campus" :showFilterMatchModes="false">
                <template #filter="{ filterModel }">
                    <Dropdown v-model="filterModel.value" :options="campus" placeholder="Select One"
                        class="p-column-filter" showClear>
                        <template #option="slotProps">
                            <Tag :value="slotProps.option" />
                        </template>
                    </Dropdown>
                </template>
            </Column>

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

    </Dialog>
    <Toast />
</template>

<script setup>
import AlumniForm from '@/components/AlumniForm.vue';
import { useAlumniStore } from '@/stores/AlumniStore';
import { onMounted, ref } from 'vue';
import { getDoc, doc } from 'firebase/firestore';
import { db, auth } from '@/stores/firebase';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const store = useAlumniStore();

const filters = ref();
const courses = ref(['BSIT', 'BSCRIM', 'BSBA'])
const batches = ref([2026, 2024])
const employment = ref(['Not Track', 'Unemployed', 'Employed'])
const campus = ref(['San Carlos City', 'Kabankalan City'])
const dt = ref();
const op = ref();
const profile = ref(false);

const toggle = (event) => {
    console.log("click")
    op.value.toggle(event);
}

const showProfile = () => {
    profile.value = !profile.value
}

const openNew = () => {
    store.alumniDialog = !store.alumniDialog
}

const initFilters = () => {
    filters.value = {
        global: { value: null },
        firstname: { value: null },
        studentId: { value: null },
        course: { value: null },
        campus: { value: null },
        batch: { value: null },
        'employment.status': { value: null },

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
    const role = localStorage.getItem('role')
    const campus = localStorage.getItem('campus')
    if (role == "superAdmin") {
        await store.getAlumni();
    } else {
        await store.filteredAlumni(campus); // temporary id
    }
    // await store.filteredAlumni("GcpwutNKeHMlD4dxk9pYHSkq98T2"); // temporary id
    // loading.value = false;
})
</script>
