<template>
    <div class="card">
        <DataTable showGridlines :value="store.admin">
            <template #header>
                <div class="flex justify-between">
                    <div class="flex gap-2">
                        <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined />
                        <Button type="button" icon="pi pi-plus" label="Add" severity="secondary"
                            @click="openAdminDialog" />
                        <Button type="button" icon="pi pi-external-link" label="Export" severity="secondary" />
                    </div>
                    <span class="relative">
                        <i class="pi pi-search absolute top-2/4 -mt-2 left-3 text-surface-400 dark:text-surface-600" />
                        <InputText placeholder="Keyword Search" class="pl-10 font-normal" />
                    </span>
                </div>
            </template>
            <template #empty> No admin found. </template>
            <Column header="No.">
                <template #body="slotProps">
                    {{ slotProps.index + 1 }}
                </template>
            </Column>
            <Column header="Name">
                <template #body="{ data }">
                    <div class="flex items-center gap-3">
                        <img src="/image.jpg" class="rounded-full h-10 w-10" />
                        <span>{{ data.name }}</span>
                    </div>
                </template>
            </Column>
            <Column field="campus" header="Campus"></Column>
            <Column field="email" header="Email"></Column>
        </DataTable>
    </div>

    <Dialog v-model:visible="store.adminDialog" :style="{ width: '25rem' }" header="Add Administrator" :modal="true"
        class="p-fluid">
        <AdminForm @click="openAdminDialog" />
    </Dialog>
</template>

<script setup>
import { onMounted } from 'vue';
import AdminForm from '@/components/AdminForm.vue'
import { useAdminStore } from '@/stores/adminStore';

const store = useAdminStore();

const openAdminDialog = () => {
    store.adminDialog = !store.adminDialog
    // if (!store.adminDialog) {
    //     toast.add({ severity: 'success', summary: 'Successful', detail: 'Click', life: 2000 });
    // }
}

onMounted(async () => {
    await store.getAdmin();
})
</script>