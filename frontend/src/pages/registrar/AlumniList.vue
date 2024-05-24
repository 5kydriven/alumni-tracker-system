<template>
    <div class="card">
        <DataTable ref="dt" scrollable scroll-height="450px" showGridlines removableSort filterDisplay="menu"
            class="z-30">
            <template #header>
                <div class="flex justify-between">
                    <div class="flex gap-2">
                        <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined @click="clearFilter()" />
                        <Button type="button" icon="pi pi-plus" label="Add" severity="secondary" outlined />
                        <Button type="button" icon="pi pi-file-export" label="Export" severity="secondary" outlined />
                        <Button type="button" icon="pi pi-file-import" label="Import" severity="secondary" outlined />

                    </div>
                    <span class="relative">
                        <i class="pi pi-search absolute top-2/4 -mt-2 left-3 text-surface-400 dark:text-surface-600" />
                        <InputText v-model="filters['global'].value" placeholder="Keyword Search"
                            class="pl-10 font-normal" />
                    </span>
                </div>
            </template>
            <template #empty> No alumni found. </template>

            <Column header="#">
                <template #body="slotProps">
                    {{ slotProps.index + 1 }}
                </template>
            </Column>

            <Column field="fullname" sortable header="Name">
            </Column>

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

            <Column field="batch" header="Year Graduated" :showFilterMatchModes="false">
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

</template>

<script setup>
import { ref } from 'vue'
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
        firstname: { value: null },
        studentId: { value: null },
        course: { value: null },
        batch: { value: null },
        'employment.status': { value: null },

    };
};

initFilters();

const clearFilter = () => {
    initFilters();
};

// const exportCSV = () => {
//     dt.value.exportCSV();
// };

</script>