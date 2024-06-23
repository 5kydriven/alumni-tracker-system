<script setup>
import JobForm from '@/components/employerComponents/JobForm.vue'
import { useEmployerStore } from '@/stores/EmployerStore.js';

const store = useEmployerStore();


</script>
<template>
    <div class="w-[900px] mx-auto px-4">
        <div>
            <h1 class="text-2xl font-bold py-2">Welcome, Peso</h1>
        </div>
        <div>
            <h1 class="text-lg font-bold mb-2">Your Job Post</h1>
            <div class="w-full" :class="false ? ' flex gap-2' : null">
                <div class="bg-gray-50 flex flex-col justify-center items-center h-72 gap-2 rounded">
                    <div>
                        <img src="/postJob.png">
                    </div>
                    <label class="text-gray-400">Your Job post will appear here</label>
                    <Button @click="store.visible = true" label="add my first job" icon="pi pi-plus" size="small" />
                </div>

                <!-- <Card style="width: 20rem">
                    <template #title>Nuxt js developer</template>
<template #subtitle>Created on 2024-06-23</template>
<template #content>
                        <div class="flex gap-4 font-semibold">
                            <label>0 Applicants</label>
                            <label>0 Hits</label>
                        </div>
                    </template>
<template #footer>
                        <div class="flex gap-3 mt-1">
                            <Button label="Edit" severity="secondary" outlined size="small" />
                            <Button label="Delete" severity="danger" size="small" />
                        </div>
                    </template>
</Card>
<Card style="width: 20rem" @click="visible = true" :pt="{
                    root: {
                        class: [
                            'flex flex-col cursor-pointer hover:text-blue-500',

                            //Shape
                            'rounded-[12px]',
                            'shadow-md',

                            //Color
                            'bg-gray-50 dark:bg-surface-900',
                            'text-surface-700 dark:text-surface-0']
                    },
                    body: {
                        class: 'h-full flex justify-center items-center '
                    }
                }">
    <template #content>
                        <div class="flex flex-col items-center gap-2 font-semibold">
                            <i class="pi pi-plus"></i>
                            <label class="cursor-pointer">Add another jobs</label>
                        </div>
                    </template>
</Card> -->
            </div>
        </div>
    </div>

    <Dialog v-model:visible="store.visible" modal :draggable="false" header="Job Information">
        <JobForm />
    </Dialog>
</template>