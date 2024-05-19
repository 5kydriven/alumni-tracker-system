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
        </DataTable>
    </div>

    <Dialog v-model:visible="adminDialog" :style="{ width: '25rem' }" header="Add Administrator" :modal="true"
        class="p-fluid">
        <AdminForm />
    </Dialog>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import AdminForm from '@/components/AdminForm.vue'
import { useAdminStore } from '@/stores/AdminStore';

const store = useAdminStore();

const filters = ref();
const dt = ref();
const adminDialog = ref(false)

const openAdminDialog = () => {
    adminDialog.value = !adminDialog.value
}

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
})
</script>