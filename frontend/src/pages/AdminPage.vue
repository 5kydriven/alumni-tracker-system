<template>
    <div class="card">
        <DataTable showGridlines :value="store.admin" ref="dt" v-model:filters="filters" removableSort scrollable
            scroll-height="450px">
            <template #header>
                <div class="flex justify-between">
                    <div class="flex gap-2">
                        <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined @click="clearFilter()" />
                        <Button type="button" icon="pi pi-plus" label="Add" outlined severity="secondary"
                            @click="openAdminDialog" />
                        <Button type="button" icon="pi pi-external-link" label="Export" outlined severity="secondary"
                            @click="exportCSV($event)" />
                    </div>
                    <span class="relative">
                        <i class="pi pi-search absolute top-2/4 -mt-2 left-3 text-surface-400 dark:text-surface-600" />
                        <InputText placeholder="Keyword Search" v-model="filters['global'].value"
                            class="pl-10 font-normal" />
                    </span>
                </div>
            </template>
            <template #empty>No admin found.</template>
            <Column header="No." style="max-width: 1rem">
                <template #body="slotProps">
                    {{ slotProps.index + 1 }}
                </template>
            </Column>
            <Column header="Name" sortable field="name">
                <template #body="{ data }">
                    <div class="flex items-center gap-3">
                        <img :src="data.image" class="rounded-full h-10 w-10" />
                        <span>{{ data.name }}</span>
                    </div>
                </template>
            </Column>
            <Column field="campus" header="Campus"></Column>
            <Column field="email" header="Email"></Column>
            <Column header="Actions" class="text-center">
                <template #body="{ data }">
                    <i class="pi pi-ellipsis-v cursor-pointer" @click="toggle($event, data.id)"></i>
                    <OverlayPanel :ref="setOverlayPanelRef(data.id)">
                        <div
                            class="z-10 w-28 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
                                <li>
                                    <a href="#"
                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                </li>
                                <li>
                                    <a @click.prevent="store.deleteAdmin(data.id)"
                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" >Delete</a>
                                </li>
                            </ul>
                        </div>
                    </OverlayPanel>
                </template>
            </Column>
        </DataTable>
    </div>

    <Dialog v-model:visible="adminDialog" :style="{ width: '25rem' }" header="Add Administrator" :modal="true"
        class="p-fluid">
        <AdminForm />
    </Dialog>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue';
import AdminForm from '@/components/AdminForm.vue';
import { useAdminStore } from '@/stores/AdminStore';

const store = useAdminStore();

const filters = ref();
const dt = ref();
const adminDialog = ref(false);
const overlayPanels = ref({});

const setOverlayPanelRef = (id) => (el) => {
    if (el) {
        overlayPanels.value[id] = el;
    } else {
        delete overlayPanels.value[id];
    }
};

const toggle = (event, id) => {
    const overlayPanel = overlayPanels.value[id];
    if (overlayPanel) {
        overlayPanel.toggle(event);
    }
};

const openAdminDialog = () => {
    adminDialog.value = !adminDialog.value;
};

const initFilters = () => {
    filters.value = {
        global: { value: null },
        // name: { value: null },
        // email: { value: null },
        // campus: { value: null },
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
    await store.getAdmin();
});
</script>
